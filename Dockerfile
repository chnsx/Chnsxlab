FROM nginx:latest
COPY ./ /usr/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80