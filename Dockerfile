# Use the lightweight Nginx Alpine image
FROM nginx:alpine

# Copy custom nginx config
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copy static assets
COPY ./index.html /usr/share/nginx/html/index.html
COPY ./styles.css /usr/share/nginx/html/styles.css
COPY ./js /usr/share/nginx/html/js

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
