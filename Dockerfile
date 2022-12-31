FROM node:alpine

RUN mkdir -p /usr/src/bot
WORKDIR /usr/src/bot

RUN npm i -g pm2

COPY package.json /usr/src/bot
RUN npm install
COPY . /usr/src/bot
CMD ["pm2-runtime", "npm", "--", "start"]
