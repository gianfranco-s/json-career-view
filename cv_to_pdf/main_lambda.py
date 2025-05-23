import base64
import json
import logging
import uuid

from datetime import datetime
from os import getenv, remove
from typing import Any

from cv_to_pdf.cv_to_pdf import render_pdf

logger = logging.getLogger()
logger.setLevel(logging.INFO)

IS_LAMBDA = getenv('IS_LAMBDA', 'true').lower() in ('1', 'true')
IS_DOCKER = getenv('IS_DOCKER', 'false').lower() in ('1', 'true')


def create_download_name(name: str = 'exported_cv', profile: str | None = None, is_python_compatible: bool = False) -> str:
    if profile is None:
        profile = 'full'

    if is_python_compatible:
        timestamp = datetime.now().strftime(r'%Y%m%d_%H%M%S')
        return f"{timestamp}_{name.lower().replace(' ', '_')}_{profile}.pdf"
    
    else:
        timestamp = datetime.now().strftime(r'%Y-%m-%d')
        return f"{name} - {profile.capitalize()} {timestamp}.pdf"


def lambda_handler(event: dict, context: Any, is_prod: bool = IS_LAMBDA, is_docker: bool = IS_DOCKER) -> None:
    body = json.loads(event["body"]) if is_prod else event
    raw_cv_data = body.get("cv_json")
    cv_data = json.loads(raw_cv_data) if isinstance(raw_cv_data, str) else raw_cv_data
    profile = body.get('profile')

    if not cv_data:
        return {
            "statusCode": 400,
            "body": json.dumps({"error": body})
        }

    tmp_filename = f'/tmp/cv_{uuid.uuid4().hex}.pdf'

    path_to_wkhtmltopdf = '/opt/bin/wkhtmltopdf' if is_prod or is_docker else None
    render_pdf(cv_data=cv_data, profile=profile, output_path=tmp_filename, path_to_wkhtmltopdf=path_to_wkhtmltopdf)

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
