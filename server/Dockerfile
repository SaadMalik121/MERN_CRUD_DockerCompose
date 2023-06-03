# Use the official Node.js image as the base
FROM node:14-alpine

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the source code
COPY . .

# Expose the port
EXPOSE 4200

# Start the application
CMD ["node", "app.js"]
