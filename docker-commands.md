# commands

### main docker commands

docker ps _-a_

docker images

docker build _-t_ **[image:version]** **[path]**

docker rmi **[image_id]**

docker network ls

docker network create **[name]**

docker network rm **[name]**

docker pull **[image:version]**

docker run _-d_ _--name_ **[name]** _-e_ **[env]** _-p_ **[host:container]** _--net_ **[name]** _-v_ **[name:container_path]** **[image:version]**

docker start **[container_id]**

docker stop **[container_id]**

docker logs **[container_id]** _-f_ | _tail_ | _grep_

docker exec _-it_ **[container_id]** _bash_ | _sh_

docker rm **[container_id]**

### start postgres db

docker run -d --name cyber-treasure-app-db -e POSTGRES_PASSWORD=**[pwd]** -p 3001:5432 postgres:16.3

### psql main commands

psql _-d_ **[db_name]** _-U_ **[user]**

\q

\l

\c **[db_name]**

\dt

\d **[table_name]**

### docker-compose main commands

docker-compose _-f_ **[path]** up _-d_ _--build_

docker-compose _-f_ **[path]** start

docker-compose _-f_ **[path]** stop

docker-compose _-f_ **[path]** down

### manage stage build

dotenv -e .env.production.local -- docker-compose up -d --build

dotenv -e .env.production.local -- docker-compose start

dotenv -e .env.production.local -- docker-compose stop

dotenv -e .env.production.local -- docker-compose down
