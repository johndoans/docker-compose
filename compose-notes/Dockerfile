FROM node:18-slim

WORKDIR /app

COPY compose-notes/api/package.json .
RUN npm install

COPY compose-notes/api/ .

CMD ["node", "server.js"]
