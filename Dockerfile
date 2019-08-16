FROM node:10-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY ./src .

ENV MONGO_UN=backend

# Run the image as a non-root user
RUN adduser -D backend
USER backend

# Run the app.  CMD is required to run on Heroku
# $PORT is set by Heroku
CMD [ "node", "index.js" ] 