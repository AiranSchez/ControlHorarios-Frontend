FROM node:12.19.0 AS build
WORKDIR /app
COPY . /app
RUN apt-get update && npm install && npm run build-css && npm run build

FROM nginx:1.19.3
WORKDIR /app
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8081

CMD ["nginx", "-g", "daemon  off;"]
