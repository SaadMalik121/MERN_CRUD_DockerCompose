# Dockerfile for React client

# Build react client
FROM node:10.16-alpine


COPY package*.json ./

###  Installing dependencies

RUN npm install --force
RUN npm build



# copy local files to app folder
COPY . .

EXPOSE 3000

CMD ["npm","start"]
