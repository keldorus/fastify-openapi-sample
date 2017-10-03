FROM node:8.4

MAINTAINER keldorus@users.noreply.github.com

WORKDIR /usr/src/app

COPY package.json .
RUN npm install -g nodemon
RUN npm install

COPY . .

CMD [ "npm", "start" ]
