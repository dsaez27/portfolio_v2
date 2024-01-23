FROM node:latest

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install

RUN npm install --save-dev @types/node typescript @types/jest

RUN npx update-browserslist-db@latest

# Bundle app source
COPY . .

# Expose port 3000
EXPOSE 5173

# Run the app
CMD [ "npm", "run" , "dev"]


