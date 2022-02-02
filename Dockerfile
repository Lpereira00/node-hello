FROM 963982835422.dkr.ecr.us-east-1.amazonaws.com/node-image:latest
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
RUN npm install mysql
CMD "npm" "start"
EXPOSE 3000