FROM node:alpine

RUN  apk add --update bash curl && \
     mkdir /opt1 && \
     chmod -R 777 /opt1

RUN npm install -g typescript

WORKDIR /opt1
COPY src /opt1/src
COPY package.json .
COPY tsconfig.json .
RUN npm install --production

CMD ["npm", "start"]