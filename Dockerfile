FROM node:lts-alpine

WORKDIR /app


COPY package.json ./
COPY package-lock.json ./


COPY client/package.json client/
COPY client/package-lock.json client/
RUN npm run install-client --only=production

COPY server/package.json server/
COPY server/package-lock.json server/
RUN npm run install-server --only=production

COPY client/ client/
RUN npm run deploy-client
COPY server/ server/


USER node
CMD [ "npm", "run", "run-server"]

EXPOSE 8000