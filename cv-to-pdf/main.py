import sys
import os
import json

from cv_to_pdf import render_pdf
from datetime import datetime


def load_json_cv(file_path: str) -> dict:
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            return json.load(file)
    except (FileNotFoundError, json.JSONDecodeError) as e:
        print(f"Error loading CV: {e}")
        sys.exit(1)


def cli_handler():
    if len(sys.argv) < 2:
        print("Usage: python cv_to_pdf.py <path_to_json_cv> [output_path]")
        sys.exit(1)

    cv_path = sys.argv[1]
    default_output = datetime.now().strftime(r"%Y%m%d_%H%M%S_") + cv_path
    output_path = sys.argv[2] if len(sys.argv) > 2 else default_output.replace('.json', '.pdf')

    cv_data = load_json_cv(cv_path)

    profile = os.environ.get('PROFILE', None)

    render_pdf(cv_data, output_path, profile)


if __name__ == "__main__":
    cli_handler()
