FROM node:alpine:3.14
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
CMD "npm" "start"
EXPOSE 3000