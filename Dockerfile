FROM node:14.15.0-buster-slim AS build
WORKDIR /app
COPY . /app
RUN apt-get update && npm install && npm run build

FROM nginx:1.19.3
WORKDIR /app
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon  off;"]