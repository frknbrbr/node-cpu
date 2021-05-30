FROM node:12-alpine AS build-env
WORKDIR /spp

# Tini addition
ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini-static /tini
RUN chmod +x /tini

COPY package*.json ./
RUN npm ci
COPY . .

EXPOSE 3000

ENTRYPOINT ["/tini", "--"]
CMD ["node", "./index.js"]
