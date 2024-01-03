FROM ubuntu:22.04

WORKDIR /home/nepo/frontend/ 

COPY . .

EXPOSE 80

RUN apt-get update \
    && apt-get install -y systemd \
    && apt-get install -y sudo \
    && apt-get install -y git \
    && apt-get install -y nodejs \
    && apt-get install -y npm \
    && apt-get install -y vim \
    && apt-get install -y nginx
