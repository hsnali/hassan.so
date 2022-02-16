FROM node:16-stretch

USER node

RUN mkdir /home/node/hassan_so

WORKDIR /home/node/hassan_so

COPY --chown=node:node package-lock.json package.json ./

RUN npm ci

CMD ["npm", "run", "dev"]