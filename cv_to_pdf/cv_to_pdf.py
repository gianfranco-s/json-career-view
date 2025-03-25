from datetime import datetime
from pathlib import Path
from typing import Iterable

from pdfkit import from_string, configuration
from jinja2 import Environment, FileSystemLoader

PROFILES = {
    'python_developer': ['EPIC iO',
                         'MecanTronic',
                         'Upwork/AtticGames',
                         'Baitcon/AySA',
                         'Shuttle99',
                         'Emissary Software LLC',
                         'Freelance'], 
    'teacher': ['UNLZ - UNGS - FIE - UB', 'Facultad de Ingeniería del Ejército']
}

IS_LAMBDA = False


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
    cv2pdf_dir = Path(__file__).parent.absolute()
    env = Environment(loader=FileSystemLoader(cv2pdf_dir / 'templates'))
    template = env.get_template('cv_template.html')

    return template.render(cv=cv_data)


def save_to_pdf(html_content: str, output_path: str) -> None:
    """Convert HTML to PDF."""
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
    
    opt = dict(options=options)
    if IS_LAMBDA:
        opt.update(configuration=configuration(wkhtmltopdf='/opt/bin/wkhtmltopdf'))

    from_string(html_content, output_path, **opt)



def render_pdf(cv_data: dict, output_path: str = '/tmp/exported_cv.pdf', profile: str | None = None) -> None:
    if profile is not None:
        cv_data = filter_experiences(cv_data=cv_data, include=PROFILES.get(profile))

    cv_data = prepare_cv_data(cv_data)
    html_content = render_html(cv_data)
    
    save_to_pdf(html_content, output_path)
