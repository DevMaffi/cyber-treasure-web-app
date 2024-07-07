ARG NODE_VERSION=20.15
ARG ALPINE_VERSION=3.20

FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION}

WORKDIR /home/app
COPY . .

ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

RUN pnpm build

CMD ["pnpm", "start"]
