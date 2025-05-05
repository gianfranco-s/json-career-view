# JSON Career View

### I have a dream...
To be able to be able to manage my life sheet from a single source. I want to be able to
* use a structured format for *all* my work experiences
* filter my life sheet by profile on [gianfranco-salomone.com](https://gianfranco-salomone.com/)
* export to pdf from my website
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

3. Preferred way to test: `IS_LAMBDA=false python -m cv_to_pdf.test_local_pdf_generation`

### Deploy lambda
1. `mkdir -p cv_to_pdf/deps/`
2. Build wkhtmltopdf (base dependency)
   ```sh
   docker buildx build \
      --output type=local,dest=cv_to_pdf/deps \
      --target wkhtmltopdf_export \
      -f cv_to_pdf/docker/Dockerfile.wkhtmltopdf \
      .
   ```

3. Upload wkhtmltopdf to AWS as layer
   ```sh
   aws lambda publish-layer-version \
      --layer-name wkhtmltopdf_with_dependencies \
      --description "Precompiled wkhtmltopdf binary for AWS Lambda" \
      --zip-file fileb://cv_to_pdf/deps/wkhtmltopdf-with-deps.zip \
      --compatible-runtimes python3.13 \
      --profile gian
   ```

4. Zip additional dependencies for lambda layer
   ```sh
   docker buildx build \
      -f cv_to_pdf/docker/Dockerfile.python-deps \
      --output type=local,dest=cv_to_pdf/deps \
      --target python_deps_export \
      .
   ```

5. Upload additional dependencies layer
   ```sh
   aws lambda publish-layer-version \
      --layer-name python_deps_cv_to_pdf \
      --description "Python dependencies for cv_to_pdf project" \
      --zip-file fileb://cv_to_pdf/deps/python_deps_cv_to_pdf.zip \
      --compatible-runtimes python3.13 \
      --profile gian
   ```


5. Create zip file for AWS Lambda Python code
   ```sh
   CODE_DIR=cv_to_pdf
   mkdir -p $CODE_DIR
   cp main_lambda.py cv_to_pdf.py __init__.py -r templates $CODE_DIR/
   zip -r deps/cv_to_pdf.zip $CODE_DIR/
   rm -rf $CODE_DIR/
   ```
6. Create lambda function in AWS, named `export-jsoncv-to-pdf`

7.  Upload cv_to_pdf.zip file to Lambda function
   ```sh
   aws lambda update-function-code \
      --function-name export-jsoncv-to-pdf \
      --zip-file fileb://deps/cv_to_pdf.zip \
      --profile gian
   ```
8. In the AWS Lambda environment click "Deploy"

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


15. Test while in project's root dir: `python -m cv_to_pdf.test_remote_pdf_generation`

## Dockerized local test
Build image
```sh
docker buildx build \
   -t lambda-pdf-test \
   -f cv_to_pdf/docker/Dockerfile.test \
   cv_to_pdf/
```

Run container (from project's root). 
```sh
docker run -it --rm \
   -v $PWD/cv_to_pdf/deps:/tmp \
   -v $PWD/cv_to_pdf/test_local_pdf_generation.py:/app/cv_to_pdf/test_local_pdf_generation.py \
   -v $PWD/cv_to_pdf/lambda_test.json:/app/cv_to_pdf/lambda_test.json \
   -v $PWD/cv_to_pdf/__init__.py:/app/cv_to_pdf/__init__.py \
   -v $PWD/cv_to_pdf/main_lambda.py:/app/cv_to_pdf/main_lambda.py \
   -v $PWD/cv_to_pdf/cv_to_pdf.py:/app/cv_to_pdf/cv_to_pdf.py \
   -v $PWD/cv_to_pdf/templates:/app/cv_to_pdf/templates \
   -e IS_DOCKER=true \
   -e LD_LIBRARY_PATH=/opt/lib \
   lambda-pdf-test \
   sh
```
(`LD_LIBRARY_PATH=/opt/lib` is where lambda will check for wkhtmltopdf)

Inside container
```sh
yum install -y fontconfig
unzip /tmp/wkhtmltopdf-with-deps.zip -d /opt && \
unzip /tmp/python_deps_cv_to_pdf.zip -d /opt && \
python3 -m cv_to_pdf.test_local_pdf_generation && mv Gianfranco* /tmp
```

This will export the file inside the current directory. Move it to extract:
```sh
mv <filename> /tmp
```

## If I ever get around to it
* <s>fix code to load relative paths</s> if using Lambda, this isn't required
* <s>use Lambda to export PDF</s> Done!
  * fix lambda so output is prettier (currently loads a lot of gibberish)
  * limit output to 1 per minute per IP, and a total of 10 downloads for that IP
* add button in frontend to generate PDF for specific profile
* use carrousel for current projects
* show status in current projects
