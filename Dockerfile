FROM node:alpine

RUN mkdir -p /usr/src/bot
WORKDIR /usr/src/bot

RUN npm i -g pm2

ENV CF_ID
ENV CF_SECRET
ENV TOKEN
ENV CLIENT_ID

COPY package.json /usr/src/bot
RUN npm install
COPY . /usr/src/bot
CMD ["pm2-runtime", "npm", "--", "start"]
