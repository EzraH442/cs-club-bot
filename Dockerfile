FROM node:latest

RUN mkdir -p /usr/src/bot
WORKDIR /usr/src/bot

ARG TOKEN
ARG CLIENT_ID
ENV TOKEN=$TOKEN
ENV CLIENT_ID=$CLIENT_ID

COPY package.json /usr/src/bot
RUN npm install
COPY . /usr/src/bot
CMD ["npm", "run", "start"]

