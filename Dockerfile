FROM node:alpine
COPY . /app
WORKDIR /app/delivery
RUN npm install && npm install -g typescript
CMD tsc ../index.ts && node ../index.js
