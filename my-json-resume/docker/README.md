# Docker workflow

```bash
cd my-json-resume/
```

### Production
```bash
docker buildx build -t json-career-view -f docker/Dockerfile .
```



### Development (hot-reload)
```bash
docker buildx build -t json-career-view:dev -f docker/Dockerfile.dev .
docker run --rm \
  -p 3000:3000 \
  -v ./:/app \
  -v node_modules:/app/node_modules \
  json-career-view:dev
```