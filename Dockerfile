FROM node:18.17.1-alpine

ENV NODE_ENV production

WORKDIR /usr/app

COPY ./dist/measmerize-app ./dist

COPY ./server.sh .

RUN chmod +x server.sh

RUN yarn global add serve

CMD ["./server.sh"]
