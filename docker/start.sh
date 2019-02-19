#!/bin/sh
# Strip URL to just host name
X=$(echo $FTP_API_HOST | sed -e "s/^http:\/\/\(.*\)\//\1/g")
if [ -z "$FTP_API_HOST" ]; then
  X=localhost
fi
# Prepare the nginx configuration file
cat ./nginx.conf | sed -e "s/FTP_API_HOST/$X/g"  > /etc/nginx/conf.d/default.conf
# Start nginx in foreground
nginx -g "daemon off;"
