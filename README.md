# JSON Career View

### I have a dream...
To be able to be able to manage my life sheet a single source. I want to be able to
* use a structured format for *all* my work experiences
* be able to export to pdf
* be able to showcase my life sheet on the web [gianfranco-salomone.com](https://gianfranco-salomone.com/)
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
2. Copy resume to pdf directory
   ```
   cp gianfranco-salomone-cv.json cv-to-pdf/
   ```
3. Choose a profile and export
   ```
   cd cv-to-pdf/
   PROFILE="python-developer" python cv_to_pdf.py gianfranco-salomone-cv.json
   ```

## If I ever get around to it
* fix code to load relative paths
* use Lambda to export PDF (don't forget to limit output to 1 per minute)
* add button in frontend to generate PDF for specific profile
