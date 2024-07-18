# Use Node.js LTS version as base image
# previously used 14
FROM node:22

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm ci

# Install production dependencies only
# RUN npm ci --only=production

# Copy the rest of the application files
COPY . .

# Expose port 3000
EXPOSE 3000

# Run the app
CMD ["npm", "run", "serverstart"]

# Set NODE_ENV to production
# ENV NODE_ENV=production

# run for production
# CMD ["npm", "run", "prod"]
