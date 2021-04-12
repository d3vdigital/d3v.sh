#!/bin/sh
chown www-data:www-data /var/www/html/ -R
chmod 644 /var/www/html/ -R
find /var/www/html/ -type d -exec chmod 755 {} \;
