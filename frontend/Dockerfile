FROM node:15.14.0-stretch

WORKDIR /home/node/app

COPY . .

RUN yarn install && yarn build

CMD [ "yarn", "start" ]
