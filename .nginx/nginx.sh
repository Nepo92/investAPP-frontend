#!/bin/bash

echo 'server {
    listen 80;
    root /nepo/app/frontend/dist;
    index index.html;
    location / {
        try_files $uri $uri/ =404;
    }
}' > /etc/nginx/sites-available/app.com
