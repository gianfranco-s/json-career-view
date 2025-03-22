import base64
import json
import logging

from typing import Any

from cv_to_pdf import render_pdf

logger = logging.getLogger()
logger.setLevel(logging.INFO)


def lambda_handler(event: dict, context: Any) -> None:
    raw_cv_json = event.get('cv_json')
    profile = event.get('profile')

    if not raw_cv_json:
        return {
            "statusCode": 400,
            "body": json.dumps({"error": "Missing 'cv_json'"})
        }

    output_path = '/tmp/exported_cv.pdf'
    render_pdf(cv_data=json.loads(raw_cv_json), profile=profile, output_path=output_path)

    with open(output_path, 'rb') as f:
        encoded_pdf = base64.b64encode(f.read()).decode('utf-8')
    
    return {
            "statusCode": 200,
            "headers": {
                "Content-Type": "application/pdf"
            },
            "body": encoded_pdf,
            "isBase64Encoded": True
        }


if __name__ == "__main__":
    """Local test"""
    
    filename = 'gianfranco-salomone-cv.json'  # In current dir
    with open(filename, "r", encoding="utf-8") as f:
        cv_json = f.read()

    test_event = {
        "cv_json": cv_json,
        "profile": "python-developer"
    }

    response = lambda_handler(test_event, None)

    output_file = filename.replace('.json', '.pdf')
    if response.get("statusCode") == 200:
        with open("output.pdf", "wb") as f:
            f.write(base64.b64decode(response["body"]))
        print("PDF saved as output.pdf")
    else:
        print("Error:", response["body"])