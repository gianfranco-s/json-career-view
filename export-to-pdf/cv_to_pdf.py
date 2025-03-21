import json
import os
import sys

from typing import Iterable
from datetime import datetime

from pdfkit import from_string
from jinja2 import Environment, FileSystemLoader

PROFILES = {
    'python-developer': ['EPIC iO',
                         'MecanTronic',
                         'Upwork/AtticGames',
                         'Baitcon/AySA',
                         'Shuttle99',
                         'Emissary Software LLC',
                         'Freelance'], 
    'teacher': ['UNLZ - UNGS - FIE - UB', 'Facultad de Ingeniería del Ejército']
}


def load_json_cv(file_path: str) -> dict:
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            return json.load(file)
    except (FileNotFoundError, json.JSONDecodeError) as e:
        print(f"Error loading CV: {e}")
        sys.exit(1)


def filter_experiences(cv_data: dict, include: Iterable) -> dict:
    if len(include) < 1:
        raise Exception('Include should have one element or more.')
    
    cv_data['work'] = [exp for exp in cv_data['work'] if exp['name'] in include]
    
    return cv_data


def format_date(date_str: str) -> str:
    """Format date string for display."""
    if not date_str:
        return "Present"
    
    try:
        date = datetime.strptime(date_str, r"%Y-%m-%d")
        return date.strftime(r"%b %Y")

    except ValueError:
        return date_str


def prepare_cv_data(cv_data: dict) -> dict:
    """
    Adds <DateFormatted> fields for specific date formats.
    Sorts work experience.
    """

    for experience in cv_data.get('work', []):
        experience['startDateFormatted'] = format_date(experience.get('startDate'))
        experience['endDateFormatted'] = format_date(experience.get('endDate'))
    
    for education in cv_data.get('education', []):
        education['startDateFormatted'] = format_date(education.get('startDate'))
        education['endDateFormatted'] = format_date(education.get('endDate'))
    
    for project in cv_data.get('projects', []):
        project['startDateFormatted'] = format_date(project.get('startDate'))
        project['endDateFormatted'] = format_date(project.get('endDate'))
    
    # Sort work experiences by start date (most recent first)
    if cv_data.get('work'):
        cv_data['work'] = sorted(
            cv_data['work'], 
            key=lambda x: x.get('startDate', ''), 
            reverse=True
        )

    return cv_data


def render_html(cv_data: dict) -> str:
    env = Environment(loader=FileSystemLoader('templates'))
    template = env.get_template('cv_template.html')

    return template.render(cv=cv_data)


def save_to_pdf(html_content: str, output_path: str) -> None:
    """Convert HTML to PDF."""
    try:
        # Save HTML file first (for debugging)
        # html_path = output_path.replace('.pdf', '.html')
        # with open(html_path, 'w', encoding='utf-8') as f:
        #     f.write(html_content)

        margin = '10mm'
        options = {
            'page-size': 'A4',
            'margin-top': margin,
            'margin-right': margin,
            'margin-bottom': margin,
            'margin-left': margin,
            'encoding': 'UTF-8',
            'no-outline': None,
            'enable-local-file-access': None
        }
        
        from_string(html_content, output_path, options=options)
        
    except Exception as e:
        print(f"Error creating PDF: {e}")
        print("HTML file was saved for manual conversion.")

def main():
    if len(sys.argv) < 2:
        print("Usage: python cv_to_pdf.py <path_to_json_cv> [output_path]")
        sys.exit(1)

    cv_path = sys.argv[1]
    default_output = datetime.now().strftime(r"%Y%m%d_%H%M%S_") + cv_path
    output_path = sys.argv[2] if len(sys.argv) > 2 else default_output.replace('.json', '.pdf')
    
    cv_data = load_json_cv(cv_path)

    profile = os.environ.get('PROFILE', None)

    if profile is not None:
        cv_data = filter_experiences(cv_data=cv_data, include=PROFILES.get(profile))

    cv_data = prepare_cv_data(cv_data)
    html_content = render_html(cv_data)
    
    save_to_pdf(html_content, output_path)


if __name__ == "__main__":
    main()
