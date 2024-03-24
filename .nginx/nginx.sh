#!/bin/bash

echo 'server {
    listen 80;
    root /root/frontend/dist;
    index index.html;
    location / {
        try_files $uri $uri/ $uri.html /index.html;
    }
}' > /etc/nginx/sites-available/investAPP
