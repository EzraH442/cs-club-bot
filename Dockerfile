FROM node:latest

RUN mkdir -p /usr/src/bota
WORKDIR /usr/src/bota

ARG TOKEN
ARG CLIENT_ID
ENV TOKEN=$TOKEN
ENV CLIENT_ID=$CLIENT_ID

COPY package.json /usr/src/bota
RUN npm install
COPY . /usr/src/bot
CMD ["npm", "run", "start"]

