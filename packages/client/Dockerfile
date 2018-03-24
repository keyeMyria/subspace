FROM node:9.8.0

COPY . /opt/ui
WORKDIR /opt/ui

ARG BASENAME
ARG JWT_STORAGE_KEY

RUN yarn

FROM nginx

WORKDIR /usr/share/nginx/html
COPY --from=0 /opt/ui/dist .
