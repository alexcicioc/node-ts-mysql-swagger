FROM node:12.16.3-alpine

WORKDIR /app
ADD package*.json ./
ADD tsconfig.json ./

RUN npm ci

COPY . .

RUN npm run build


CMD ["npm", "run", "start:prod"]
