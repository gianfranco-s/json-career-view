#!/bin/bash

PACKAGE_DIR=lambda_package
PYTHON_LIBS_DIR=$PACKAGE_DIR/python
DEPENDENCIES_ZIP="CV2PDF_DEPENDENCIES.zip"

echo "Cleaning up old build..."
rm -rf $PACKAGE_DIR $ZIP_FILE $DEPENDENCIES_ZIP

echo "Creating dependencies layer..."
mkdir -p $PACKAGE_DIR
pip install --target $PYTHON_LIBS_DIR -r requirements.txt
zip -r $DEPENDENCIES_ZIP $PACKAGE_DIR/

# echo "Copying source files..."
# cp main_lambda.py cv_to_pdf.py $PACKAGE_DIR/
# cp -r templates $PACKAGE_DIR/

# echo "Creating zip..."
# zip -r $ZIP_FILE $PACKAGE_DIR/
