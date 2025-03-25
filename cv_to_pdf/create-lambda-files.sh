#!/bin/bash

DEPENDENCIES_DIR=python
CODE_DIR=cv_to_pdf

echo "Cleaning up old build..."
rm -rf *.zip

echo "Creating dependencies layer..."
OUTPUT_FILE=cv_to_pdf_dependencies.zip
mkdir -p $DEPENDENCIES_DIR
pip install --target $DEPENDENCIES_DIR -r requirements.txt
zip -r $OUTPUT_FILE $DEPENDENCIES_DIR/

echo "Creating code layer..."
mkdir -p $CODE_DIR
OUTPUT_FILE=cv_to_pdf.zip
cp main_lambda.py cv_to_pdf.py $CODE_DIR/
cp -r templates $CODE_DIR/
zip -r $OUTPUT_FILE $CODE_DIR/


echo "Removing build files.."
rm -rf $DEPENDENCIES_DIR $CODE_DIR