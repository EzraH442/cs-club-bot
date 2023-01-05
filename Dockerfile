ARG CF_ID 
ARG CF_SECRET
ARG TOKEN
ARG CLIENT_ID

FROM node:alpine

ENV CF_ID=$CF_ID
ENV CF_SECRET=$CF_SECRET
ENV TOKEN=$TOKEN
ENV CLIENT_ID=$CLIENT_ID

RUN mkdir -p /usr/src/bot
WORKDIR /usr/src/bot

RUN npm i -g pm2

COPY package.json /usr/src/bot
RUN npm install
COPY . /usr/src/bot
CMD ["pm2-runtime", "npm", "--", "start"]
