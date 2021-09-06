FROM node:14.17.6-alpine

ENV NODE_ENV production

WORKDIR /home/node/app

COPY package.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile

COPY api/ api/
COPY components/ components/
COPY config/ config/
COPY favicon.ico .
COPY extensions/ extensions/
COPY public/robots.txt public/

RUN yarn build

CMD [ "yarn", "start" ]
