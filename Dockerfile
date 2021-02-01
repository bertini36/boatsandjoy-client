FROM node:12.20

WORKDIR code

ENV PATH /code/node_modules/.bin:$PATH

COPY package.json .
COPY package-lock.json .
RUN npm install
