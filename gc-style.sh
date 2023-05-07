#!/bin/bash

GC_REPOS="tekmath/gc-style"
GC_TOKEN=$(curl https://ghcr.io/token\?scope\="repository:$GC_REPOS:pull" | cut -d ':' -f 2 | cut -d '"' -f 2)
GC_STATUS=$(curl -I -f -s -o /dev/null -H "Authorization: Bearer $GC_TOKEN" "https://ghcr.io/v2/$GC_REPOS/manifests/latest" && echo 0 || echo 1)
GC_FILE="gc-style-report.txt"
rm -f "$GC_FILE"

### Check if repository exist
if [ $GC_STATUS -eq 0 ]; then
    ### Pull last version of the image
    docker pull ghcr.io/$GC_REPOS:latest && docker image prune -f
    docker run --rm -v $PWD:/app/delivery ghcr.io/$GC_REPOS:latest
else
    echo "ERROR: Unable to retrieve repository information"
fi
