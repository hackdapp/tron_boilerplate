#!/usr/bin/env bash
set -o errexit

# change to script's directory
cd "$(dirname "$0")/../docker"

if [ "$1" == "--rm" ]
then
    echo "== stop docker container and rm the data dir."
    docker stop "mytrondapp"" || true && docker rm --force "mytrondapp"" || true
fi

echo "=== run docker container from the eosio/eos-dev image ==="
docker run --rm --name "mytrondapp" -d \
-p 8091:8091 -p 8092:8092 -p 8090:8090 -p 50051:50051 -p 50052:50052 \
-w "/tron" trontools/quickstart

if [ "$1" != "--nolog" ]
then
    echo "=== follow mytrondapp logs ==="
    docker logs "mytrondapp" --follow
fi
