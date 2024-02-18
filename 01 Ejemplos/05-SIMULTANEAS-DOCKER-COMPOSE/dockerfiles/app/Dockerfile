FROM ubuntu:22.04

WORKDIR /var/www/html

RUN apt-get update && \
    apt-get install -y nginx

RUN rm -f index.nginx-debian.html

CMD ["nginx", "-g", "daemon off;"]