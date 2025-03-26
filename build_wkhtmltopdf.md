# Build wkhtmltopdf with dependencies

1. Start Amazon Linux 2 container
   ```
   docker run -it --rm -v ./:/tmp amazonlinux:2 bash
   ```

2. Inside the container, install dependencies
   ```
   yum update -y && yum install -y libXrender libXext libX11 fontconfig freetype zip && \
   yum install -y https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6-1/wkhtmltox-0.12.6-1.centos7.x86_64.rpm
   ```

   install -y \
    libjpeg-turbo \
    libpng \
    libpng-devel \
    xorg-x11-fonts-Type1 \
    xorg-x11-fonts-75dpi \
    ghostscript \
    urw-fonts \

3. Still inside the container, create .zip
   ```
   mkdir -p layer/bin
   mkdir -p layer/lib

   # Copy wkhtmltopdf binary
   cp /usr/local/bin/wkhtmltopdf layer/bin/

   # Identify required libraries
   # ldd /usr/local/bin/wkhtmltopdf | awk '{print $3}' | grep -E "^/lib|^/usr/lib" | sort -u

   # Copy said libraries
   cp /lib64/libX11.so.6 layer/lib
   cp /lib64/libXau.so.6 layer/lib
   cp /lib64/libXext.so.6 layer/lib
   cp /lib64/libXrender.so.1 layer/lib
   cp /lib64/libbz2.so.1 layer/lib
   cp /lib64/libc.so.6 layer/lib
   cp /lib64/libcom_err.so.2 layer/lib
   cp /lib64/libcrypto.so.10 layer/lib
   cp /lib64/libdl.so.2 layer/lib
   cp /lib64/libexpat.so.1 layer/lib
   cp /lib64/libfontconfig.so.1 layer/lib
   cp /lib64/libfreetype.so.6 layer/lib
   cp /lib64/libgcc_s.so.1 layer/lib
   cp /lib64/libgssapi_krb5.so.2 layer/lib
   cp /lib64/libjpeg.so.62 layer/lib
   cp /lib64/libk5crypto.so.3 layer/lib
   cp /lib64/libkeyutils.so.1 layer/lib
   cp /lib64/libkrb5.so.3 layer/lib
   cp /lib64/libkrb5support.so.0 layer/lib
   cp /lib64/libm.so.6 layer/lib
   cp /lib64/libpcre.so.1 layer/lib
   cp /lib64/libpng15.so.15 layer/lib
   cp /lib64/libpthread.so.0 layer/lib
   cp /lib64/libresolv.so.2 layer/lib
   cp /lib64/librt.so.1 layer/lib
   cp /lib64/libselinux.so.1 layer/lib
   cp /lib64/libssl.so.10 layer/lib
   cp /lib64/libstdc++.so.6 layer/lib
   cp /lib64/libuuid.so.1 layer/lib
   cp /lib64/libxcb.so.1 layer/lib
   cp /lib64/libz.so.1 layer/lib
      
   
   (cd layer/ && zip -r /tmp/wkhtmltopdf-with-deps.zip ./)
   ```
