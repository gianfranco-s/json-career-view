import base64
import json
import logging
import uuid

from datetime import datetime
from os import remove
from typing import Any

from cv_to_pdf import render_pdf

logger = logging.getLogger()
logger.setLevel(logging.INFO)


def create_download_name(name: str = 'exported_cv', profile: str | None = None, is_python_compatible: bool = False) -> str:
    if profile is None:
        profile = 'full'

    if is_python_compatible:
        timestamp = datetime.now().strftime(r'%Y%m%d_%H%M%S')
        return f"{timestamp}_{name.lower().replace(' ', '_')}_{profile}.pdf"
    
    else:
        timestamp = datetime.now().strftime(r'%Y-%m-%d')
        return f"{name} - {profile.capitalize()} {timestamp}.pdf"


def lambda_handler(event: dict, context: Any) -> None:
    raw_cv_json = event.get('cv_json')
    profile = event.get('profile')

    if not raw_cv_json:
        return {
            "statusCode": 400,
            "body": json.dumps({"error": "Missing 'cv_json'"})
        }

    tmp_filename = f'/tmp/cv_{uuid.uuid4().hex}.pdf'
    cv_data = json.loads(raw_cv_json)
    render_pdf(cv_data=cv_data, profile=profile, output_path=tmp_filename)

    with open(tmp_filename, 'rb') as f:
        encoded_pdf = base64.b64encode(f.read()).decode('utf-8')

    download_filename = create_download_name(cv_data.get('basics').get('name'), profile)

    remove(tmp_filename)
    return {
            "statusCode": 200,
            "headers": {
                "Content-Type": "application/pdf",
                "Content-Disposition": f"attachment; filename={download_filename}"
            },
            
            "body": encoded_pdf,
            "isBase64Encoded": True
        }


if __name__ == "__main__":
    """Local test"""
    
    filename = 'base_cv.json'  # In current dir
    with open(filename, "r", encoding="utf-8") as f:
        cv_json = f.read()

    test_event = {
        "cv_json": cv_json,
        "profile": "python_developer"
    }

    response = lambda_handler(test_event, None)
    from pprint import pprint
    pprint(response)

    output_file = response['headers'].get('Content-Disposition').split('=')[1]
    if response.get("statusCode") == 200:
        with open(output_file, "wb") as f:
            f.write(base64.b64decode(response["body"]))
        print(f"PDF saved as {output_file}")
    else:
        print("Error:", response["body"])