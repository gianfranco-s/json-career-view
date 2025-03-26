# JSON Career View

### I have a dream...
To be able to be able to manage my life sheet a single source. I want to be able to
* use a structured format for *all* my work experiences
* be able to showcase my life sheet on the web [gianfranco-salomone.com](https://gianfranco-salomone.com/)
* be able to export to pdf from my website
* pay close to nothing to maintain these services
* *eventually* be able to update it using an LLM based on specific job descriptions

This is my personal project, where I sometimes put in the work to get there.

## Website
Coded in TypeScript

1. Copy resume to project
   ```
   mkdir -p my-json-resume/src/data
   cp gianfranco-salomone-cv.json my-json-resume/src/data/base_cv.json
   ```
2. Run the project
   ```
   (cd my-json-resume && npm run dev)
   ```

### Deploy to Vercel
   ```
   (cd my-json-resume && vercel --prod)
   ```

## Export to pdf
1. Install required dependencies
   ```
   sudo apt-get install -y wkhtmltopdf
   ```
2. Choose a profile and export
   ```
   cd cv-to-pdf/
   PROFILE="python-developer" python main_lambda.py
   ```

## If I ever get around to it
* <s>fix code to load relative paths</s> if using Lambda, this isn't required
* use Lambda to export PDF
  * limit output to 1 per minute per IP, and a total of 10 downloads for that IP
* add button in frontend to generate PDF for specific profile
* use carrousel for current projects
* show status in current projects


### Deploy lambda
0. `cd cv_to_pdf/`
1. [Build wkhtmltopdf (base dependency)](build_wkhtmltopdf.md)
2. Upload wkhtmltopdf to AWS as layer
   ```sh
   aws lambda publish-layer-version \
      --layer-name wkhtmltopdf_with_dependencies \
      --description "Precompiled wkhtmltopdf binary for AWS Lambda" \
      --zip-file fileb://wkhtmltopdf-with-deps.zip \
      --compatible-runtimes python3.13 \
      --profile gian
   ```

2. Export additional dependencies to requirements file
   ```sh
   poetry export -f requirements.txt --without-hashes -o requirements.txt
   ```

3. Create additional dependencies zip file for new layer
   ```
   mkdir -p python/
   pip install --target python/ -r requirements.txt
   zip -r python_deps_cv_to_pdf.zip python/
   rm -rf python/
   ```

4. Upload additional dependencies layer
   ```sh
   aws lambda publish-layer-version \
      --layer-name python_deps_cv_to_pdf \
      --description "Python dependencies for cv_to_pdf project" \
      --zip-file fileb://python_deps_cv_to_pdf.zip \
      --compatible-runtimes python3.13 \
      --profile gian
   ```


5. Create zip file for AWS Lambda Python code
   ```sh
   CODE_DIR=cv_to_pdf
   mkdir -p $CODE_DIR
   cp main_lambda.py cv_to_pdf.py -r templates $CODE_DIR/
   zip -r cv_to_pdf.zip $CODE_DIR/
   rm -rf $CODE_DIR/
   ```
6. Create lambda function in AWS, named `export-jsoncv-to-pdf`

7.  Upload cv_to_pdf.zip file to Lambda function
   ```sh
   aws lambda update-function-code \
      --function-name export-jsoncv-to-pdf \
      --zip-file fileb://cv_to_pdf.zip \
      --profile gian
   ```
8. In the AWS Lambda environment, under cv_to_pdf.py, set `IS_LAMBDA` to `True` and click "Deploy"

9. In Runtime settings, update Handler to be `cv_to_pdf.main_lambda.lambda_handler`

10. In Layers settings, add the layers created previously

11. In Test tab, create a new test:
   ```json
   {
      "cv_json": <copy-paste-lambda_test.json>,
      "profile": "python_developer"
   }
   ```

12. Set Configuration tab, set function configuration to 30s.

13. Click "Test". Expected output:
   ```
   Status: Succeeded
   Test Event Name: upload-resume

   Response:
   {
      "statusCode": 200,
      "headers": {
         "Content-Type": "application/pdf",
         "Content-Disposition": "attachment; filename=Gianfranco Salomone - Python_developer 2025-03-26.pdf"
      },
      "body": "really-long-string",
      "isBase64Encoded": true
   }
   ```

14. In Configuration tab, Triggers, click "Add trigger" and then "API Gateway". If none exists, create an HTTP API, with Open security


15. Tests (in project's root dir)

* local: `python -m cv_to_pdf.test_local_pdf_generation`
* remote: `python -m cv_to_pdf.test_remote_pdf_generation`