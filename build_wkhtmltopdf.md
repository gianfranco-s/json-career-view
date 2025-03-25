# Build wkhtmltopdf with dependencies

1. Start Amazon Linux 2 container
   ```
   docker run -it --rm -v ./:/tmp amazonlinux:2 bash
   ```

2. Inside the container, install dependencies
   ```
   yum install -y libXrender libXext libX11 fontconfig freetype tar zip && \
   yum install -y https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6.1-3/wkhtmltox-0.12.6.1-3.almalinux8.x86_64.rpm
   ```

3. Still inside the container, create .zip
   ```
   mkdir -p layer/bin layer/lib
   cp /usr/local/bin/wkhtmltopdf layer/bin/
   cp /usr/lib64/libXrender.so.1 layer/lib/
   cp /usr/lib64/libXext.so.6 layer/lib/
   cp /usr/lib64/libX11.so.6 layer/lib/
   cp /usr/lib64/libfontconfig.so.1 layer/lib/
   cp /usr/lib64/libfreetype.so.6 layer/lib/
   cp /usr/lib64/libjpeg.so.62 layer/lib/
   cp /usr/lib64/libpng15.so.15 layer/lib/
   
   
   (cd layer/ && zip -r /tmp/wkhtmltopdf-with-deps.zip ./)
   ```



https://github.com/brandonlim-hs/wkhtmltopdf-aws-lambda-layer


https://dev.to/bschoeneweis/converting-html-to-a-pdf-using-python-aws-lambda-and-wkhtmltopdf-3mdh