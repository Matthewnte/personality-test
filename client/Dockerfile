FROM node:16-alpine

# Create app directory
WORKDIR /app

#Copy package.json and package-lock to enjoy caching
COPY package*.json .

RUN npm install --only=prod

COPY . .

EXPOSE 8081

ENTRYPOINT ["npm", "run", "serve"]
