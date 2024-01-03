#!/bin/bash

echo 'server {
    listen 10.0.0.102;
    root /home/nepo/frontend;
    index index.html;
    location / {
        try_files $uri $uri/ =404;
    }
}' > /etc/nginx/sites-available/app.com
