import os
import subprocess

def lambda_handler(event, context):
    try:

        wkhtmltopdf_path = "/opt/bin/wkhtmltopdf"
        exists = os.path.isfile(wkhtmltopdf_path)
        permissions = subprocess.run(["ls", "-l", wkhtmltopdf_path], capture_output=True, text=True).stdout if exists else "Not found"

        return {
            "statusCode": 200,
            "body": {
                "wkhtmltopdf_exists": exists,
                "wkhtmltopdf_permissions": permissions
            }
        }

    except Exception as e:
        return {
            "statusCode": 500,
            "error": str(e)
        }
