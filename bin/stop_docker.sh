#!/usr/bin/env bash
set -o errexit

#!/bin/bash
figlet "DockerService"

echo "== stop docker container and rm the data dir."
docker stop "mytrondapp" || true && docker rm --force "mytrondapp" || true