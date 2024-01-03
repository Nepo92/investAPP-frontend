FROM ubuntu:22.04

COPY . /home/nepo/frontend/

EXPOSE 80

RUN apt-get update \
    && apt-get install -y systemd \
    && apt-get install -y sudo \
    && apt-get install -y vim \
    && apt-get install -y nginx
