FROM node:12.19.0 AS build
WORKDIR /app
COPY . /app
RUN apt-get update && npm install && npm run build
ENTRYPOINT ["bash", "./run.sh"]

FROM nginx:1.19.3
WORKDIR /app
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon  off;"]