FROM ubuntu:22.04

WORKDIR /var/www/html

RUN apt-get update && \
    apt-get install -y nginx

RUN rm -f index.nginx-debian.html

COPY app ./

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]