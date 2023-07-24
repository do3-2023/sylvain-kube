## Run `webapp` locally

```bash
cd webapp
docker build -t ghcr.io/do3-2023/<YOUR_REPO_NAME>:latest --target runner .
docker run -p 3000:3000 ghcr.io/do3-2023/<YOUR_REPO_NAME>:latest
```

## Login to `ghcr.io`

You need to create TOKEN before

```bash
docker login ghcr.io -u USERNAME 
```

## Push on repo github

```bash
docker push ghcr.io/do3-2023/<YOUR_REPO_NAME>:latest
```

## Get url

```bash
kubectl -n front get svc webapp -o jsonpath={.spec.ports[0].nodePort}
```