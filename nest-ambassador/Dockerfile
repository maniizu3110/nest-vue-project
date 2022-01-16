FROM node:12.2-alpine

WORKDIR /app

COPY . .
RUN npm install --only=production

CMD ["node", "dist/main"]