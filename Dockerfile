FROM node:12.19.0 AS build
WORKDIR /app
COPY . /app
RUN apt-get update && npm install
ENTRYPOINT ["bash", "./run.sh"]

FROM nginx:1.19.3
WORKDIR /app
COPY . /app
EXPOSE 80

CMD ["nginx", "-g", "daemon  off;"]