## DEV
FROM node:20-alpine AS dev

WORKDIR /app

COPY . .

RUN yarn install

EXPOSE 5000

CMD [ "yarn", "dev" ]



## BUILD
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn run build




## PROD
FROM node:20-alpine AS prod 

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --production --frozen-lockfile

COPY --from=build /app/dist /app/dist

EXPOSE 5000

CMD [ "node", "dist/index.js" ]