FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build


# ── Export stage ──────────────────────────────────────────────────────────────
# `docker buildx build --output type=local,dest=./out --target artifacts .`
# extracts only the static files to the host; nothing else leaves the container.
FROM scratch AS artifacts
COPY --from=builder /app/out /


# ── Local serving stage ───────────────────────────────────────────────────────
# `docker buildx build -t json-career-view -f docker/Dockerfile .`
# `docker run -p 8080:80 json-career-view`
FROM nginx:alpine AS runner

COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
