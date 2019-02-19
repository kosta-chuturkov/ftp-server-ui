FROM alpine:3.8

ENV FTP_API_HOST localhost
ENV UI_TITLE FTP_Server_UI
RUN apk add --no-cache nginx \
    && mkdir /run/nginx \
    && ln -sf /dev/stdout /var/log/nginx/access.log \
    && ln -sf /dev/stderr /var/log/nginx/error.log

WORKDIR /app/
CMD "/app/start.sh"

COPY . /app/
