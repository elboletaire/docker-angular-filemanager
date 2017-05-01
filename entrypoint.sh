#!/bin/bash
set -e

cp /templates/configuration-${BRIDGE}.js /var/www/html/configuration.js

cp /templates/php.ini /usr/local/etc/php/conf.d/php.ini

exec "$@"
