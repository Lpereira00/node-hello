FROM --platform=linux/amd64 node
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
CMD "npm" "start"
EXPOSE 3000