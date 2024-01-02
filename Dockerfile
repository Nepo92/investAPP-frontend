FROM ubuntu:24.04

RUN apt-get update \
    && apt-get install -y vim \
    && apt-get install -y git \    
    && apt-get install -y nodejs \
    && apt-get install -y npm

 WORKDIR /root/invest-app/frontend

COPY ./ ./

RUN npm install