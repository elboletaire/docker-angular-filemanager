#!/bin/bash
set -e

cp /templates/configuration-${BRIDGE}.js /var/www/html/configuration.js

exec "$@"
