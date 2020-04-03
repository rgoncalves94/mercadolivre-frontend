FROM node:10.18.0-alpine as build-stage
RUN apk add g++ make python
WORKDIR /usr/src/app
COPY public public
COPY package.json yarn.lock ./
RUN yarn
COPY src src
RUN yarn run build

FROM nginx:1.14-alpine
WORKDIR /usr/app
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf