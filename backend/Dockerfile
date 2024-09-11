# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 3000 for the application (or the port your backend runs on)
EXPOSE 8000

# Start the application
CMD [ "node", "app.js" ]

