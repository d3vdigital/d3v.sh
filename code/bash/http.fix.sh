#!/bin/sh
chown www-data:www-data /var/www/html/ -R
find /path/to/html/ -type d -exec chmod 0755 {} \; 
find /path/to/html/ -type f -exec chmod 0644 {} \;
