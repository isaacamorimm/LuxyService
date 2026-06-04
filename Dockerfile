FROM node:20-alpine

RUN npm install -g pnpm

WORKDIR /usr/src/app

EXPOSE 5173