# Build stage
FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Development stage
FROM node:20 AS development

WORKDIR /app

COPY --from=builder /app .

EXPOSE 3000

CMD ["npm", "run", "dev"]

# Production stage
FROM node:20-slim AS production

WORKDIR /app

COPY --from=builder /app/package*.json ./
RUN npm ci --only=production

COPY --from=builder /app/src ./src

EXPOSE 3000

ENV NODE_ENV=production

CMD ["npm", "run", "start"]