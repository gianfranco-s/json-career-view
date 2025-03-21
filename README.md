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
   cp gianfranco-salomone-cv.json my-json-resume/src/data/base_cv.json
   ```
2. Run the project
   ```
   (cd my-json-resume && npm run dev)
   ```

## To Do
- [ ] [Download resume in PDF](https://www.npmjs.com/package/@react-pdf/renderer)
- [ ] Automate a query to an LLM to update the JSON resume with a job description

## Deploy with vercel
   ```
   cd my-json-resume
   vercel --prod
   ```


sudo apt-get install -y wkhtmltopdf

PROFILE="python-developer" python cv_to_pdf.py gianfranco-salomone-cv.json
