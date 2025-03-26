#!/bin/bash

DEPENDENCIES_DIR=python
CODE_DIR=cv_to_pdf

echo "Cleaning up old build..."
rm -rf *.zip

mkdir -p python/
pip install --target python/ -r requirements.txt
zip -r python_deps_cv_to_pdf.zip python/
rm -rf python/

echo "Creating code layer..."
mkdir -p $CODE_DIR
OUTPUT_FILE=cv_to_pdf.zip
cp main_lambda.py cv_to_pdf.py $CODE_DIR/
cp -r templates $CODE_DIR/
zip -r $OUTPUT_FILE $CODE_DIR/


echo "Removing build files.."
rm -rf $DEPENDENCIES_DIR $CODE_DIR