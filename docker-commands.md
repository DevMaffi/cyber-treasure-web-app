# commands

### main docker commands

docker ps _-a_

docker images

docker network ls

docker network create **[name]**

docker pull **[image:version]**

docker run _-d_ _--name_ **[name]** _-e_ **[env]** _-p_ **[host:container]** _--net_ **[name]** **[image:version]**

docker start **[name]**

docker stop **[name]**

docker logs **[name]** _-f_ | _tail_ | _grep_

docker exec _-it_ **[name]** bash

### start postgres db

docker run -d --name cyber-treasure-app-db -e POSTGRES_PASSWORD=**[password]** -p6000:5432 postgres:16.3
