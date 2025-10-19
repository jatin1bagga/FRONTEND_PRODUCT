# frontend/Dockerfile

########## Build stage ##########
FROM node:18-alpine AS build
WORKDIR /app

# install deps
COPY package*.json ./
RUN npm ci

# copy source and build
COPY . .
RUN npm run build

########## Runtime stage ##########
FROM nginx:alpine

# Copy our SPA-friendly nginx template
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

# Copy compiled app
COPY --from=build /app/dist /usr/share/nginx/html

# Render reads PORT or Cloud Run sets PORT=8080. Nginx listens on 8080.
ENV PORT=8080
EXPOSE 8080

# Use envsubst to inject BACKEND_URL into nginx conf on startup
CMD sh -c 'envsubst '\''$${BACKEND_URL} $${PORT}'\'' \
      < /etc/nginx/templates/default.conf.template \
      > /etc/nginx/conf.d/default.conf && \
    nginx -g "daemon off;"'
