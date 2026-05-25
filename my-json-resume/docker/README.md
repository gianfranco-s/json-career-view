# Docker workflow

All commands run from `my-json-resume/`.

### Extract static artifacts (no image left behind)
```bash
docker buildx build \
  --output type=local,dest=./out \
  --target artifacts \
  -f docker/Dockerfile \
  .
```

### Build and run locally with nginx
```bash
docker buildx build -t json-career-view -f docker/Dockerfile .
docker run --rm -p 8080:80 json-career-view
# → http://localhost:8080
```
