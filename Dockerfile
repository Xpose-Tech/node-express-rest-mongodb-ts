FROM node:13-alpine

# mkdir /app && cd /app
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# Development
# CMD ["npm", "run", "dev"]

# Production
CMD ["npm", "start"]
# RUN npm install -g pm2
# CMD ["pm2-runtime", "ecosystem.config.js", "--env", "production"]