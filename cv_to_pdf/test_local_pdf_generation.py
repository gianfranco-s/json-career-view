import json
import base64

from pathlib import Path

from cv_to_pdf.main_lambda import lambda_handler


def local_pdf_generation() -> None:

    """Local test"""
    basedir = Path(__file__).parents[1]

    with open(basedir / 'gianfranco-salomone-cv.json', "r", encoding="utf-8") as f:
        cv_json = f.read()

    test_event = {
        "cv_json": cv_json,
        "profile": "python_developer"
    }

    response = lambda_handler(test_event, None, is_prod=False)
    

    output_file = response['headers'].get('Content-Disposition').split('=')[1]
    if response.get("statusCode") == 200:
        with open(output_file, "wb") as f:
            f.write(base64.b64decode(response["body"]))
        print(f"PDF saved as {output_file}")
    else:
        print("Error:", response["body"])


if __name__ == "__main__":
    local_pdf_generation()
