FROM node:latest AS build

WORKDIR /Symfony/

COPY package.json /Symfony/package.json

COPY package-lock.json /Symfony/package-lock.json

COPY public/ /Symfony/public

COPY src/ /Symfony/src

RUN npm install

CMD ["npm", "start"]
