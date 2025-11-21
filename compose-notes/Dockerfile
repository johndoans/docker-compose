FROM node:18-slim

WORKDIR /app

COPY api/package.json .

RUN npm install

COPY api/ .

CMD ["node", "server.js"]
