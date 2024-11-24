FROM node:20 AS build

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

ENV VITE_PADDLE_ENVIRONMENT=sandbox
ENV VITE_PADDLE_TOKEN=test_1a97ba5a066454fb188ee93801d

RUN pnpm run build

FROM nginx:alpine AS production

COPY --from=build /app/dist /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
