## Run `webapp` locally

```bash
cd webapp
docker build -t next --target runner .
docker run -p 3000:3000 next
```