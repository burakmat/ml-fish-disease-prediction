FROM node:22
WORKDIR /app
COPY . .
RUN npm install
# RUN npm run build # For production
ENTRYPOINT [ "npm", "run", "dev" ]