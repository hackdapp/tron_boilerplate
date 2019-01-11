# tron_boilerplate


## dockerhub
https://hub.docker.com/r/trontools/quickstart/tags

1. pull image

```
docker pull trontools/quickstart
```

2. run tron image


```
docker run -it \
  -p 8091:8091 \
  -p 8092:8092 \
  -p 8090:8090 \
  --rm \
  --name tron \
  trontools/quickstart
```