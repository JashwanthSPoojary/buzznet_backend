# syntax=docker/dockerfile:1
FROM node:20-alpine AS base
WORKDIR /app

FROM base AS deps
COPY package*.json ./
RUN npm ci

FROM base AS builder
ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npx prisma generate
RUN npx tsc

FROM base AS runner
# ENV HOST=0.0.0.0
# ENV PORT=3000
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 --ingroup nodejs expressjs
COPY package.json ./
COPY --from=builder --chown=expressjs:nodejs  /app/dist ./dist
COPY --from=builder --chown=expressjs:nodejs  /app/node_modules ./node_modules
COPY --from=builder --chown=expressjs:nodejs  /app/node_modules/.prisma ./node_modules/.prisma

USER expressjs
EXPOSE 3000
CMD [ "node","dist/index.js" ]






