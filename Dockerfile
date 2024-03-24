FROM ubuntu:latest

ENV APP_NAME /investAPP

ENV USER_DIR /root

ENV CONTAINER_PORT 80
ENV NODE_VERSION v20.10

WORKDIR $USER_DIR/frontend

COPY . .

EXPOSE $CONTAINER_PORT

RUN apt-get update \
    && apt-get install -y systemd \
    && apt-get install -y curl \
    && apt-get install -y sudo \
    && apt-get install -y git \
    && apt-get install -y vim \
    && apt-get install -y nginx

# nvm settings
RUN git clone https://github.com/nvm-sh/nvm.git $USER_DIR/.nvm \
    && chmod -R 777 $USER_DIR/.nvm/ \ 
    && bash $USER_DIR/.nvm/install.sh \
    && bash -i -c 'nvm ls-remote' \ 
    && bash -i -c 'nvm install $NODE_VERSION' \
    && bash -i -c 'nvm use $NODE_VERSION' \
    && ln -sf $USER_DIR/.nvm/versions/node/v20.10.0/bin/nodejs /bin/nodejs \
    && ln -sf $USER_DIR/.nvm/versions/node/v20.10.0/bin/node /bin/node \
    && ln -sf $USER_DIR/.nvm/versions/node/v20.10.0/bin/npm /bin/npm

# nginx settings
RUN sudo rm /etc/nginx/sites-available/default \
    && sudo rm /etc/nginx/sites-enabled/default \
    && bash ./.nginx/nginx.sh \
    && ln -s /etc/nginx/sites-available/$APP_NAME /etc/nginx/sites-enabled/$APP_NAME \
    && gpasswd -a www-data root \
    && chmod g+x $USER_DIR \
    && chmod g+x $USER_DIR/frontend

CMD git pull && npm install && npm run build && nginx -g 'daemon off;'