import base64
import json

from pathlib import Path

import requests

from cv_to_pdf.main_lambda import lambda_handler


def remote_pdf_generation(url: str) -> None:

    """Test only when Lambda function has HTTP endpoint enabled"""
    basedir = Path(__file__).parents[1]

    with open(basedir / 'gianfranco-salomone-cv.json', "r", encoding="utf-8") as f:
        cv_json = json.load(f)

    test_event = {
        "cv_json": cv_json,
        "profile": "python_developer"
    }

    from pprint import pprint
    # pprint(test_event)
    print(json.dumps(test_event, indent=2))

    response = requests.post(
        url,
        json=test_event,
        headers={"Content-Type": "application/json"}
    )

    if response.status_code == 200:
        response_json = response.json()
        output_file = response_json['headers'].get('Content-Disposition').split('=')[1]
        
        with open(output_file, "wb") as f:
            f.write(base64.b64decode(response_json["body"]))
        
        print(f"PDF saved as {output_file}")
    else:
        print("Error:", response.text)


if __name__ == "__main__":
    lambda_url = 'https://svojsyq0le.execute-api.us-east-1.amazonaws.com/default/export-jsoncv-to-pdf'
    remote_pdf_generation(lambda_url)
