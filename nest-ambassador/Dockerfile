#FROM node:12.2
#WORKDIR /app
#COPY package.json .
#RUN npm install
#COPY . .

#CMD npm run start:dev

##-----------------

FROM node:12.2-alpine

WORKDIR /app

COPY . .

RUN npm install --only=production

CMD ["node", "dist/main"]