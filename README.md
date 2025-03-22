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
1. Download `wkhtmltopdf.zip`: https://github.com/jblotus/aws-lambda-wkhtmltopdf
2. Upload to AWS
   ```sh
   aws lambda publish-layer-version \
      --layer-name wkhtmltopdf-layer \
      --description "Precompiled wkhtmltopdf binary for AWS Lambda" \
      --zip-file fileb://wkhtmltopdf.zip \
      --compatible-runtimes python3.13 \
      --profile gian
   ```
3. Export dependencies to requirements file
   ```sh
   poetry export -f requirements.txt --without-hashes -o requirements.txt
   ```
