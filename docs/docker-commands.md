# commands

## main docker commands

```
docker ps [-a]
```

```
docker images
```

```
docker build [-t] (image:version) (path)
```

```
docker rmi (image_id)
```

```
docker network ls
```

```
docker network create (name)
```

```
docker network rm (name)
```

```
docker pull (image:version)
```

```
docker run [-d]\
    [--name] (name)\
    [-e] (env)\
    [-p] (host:container)\
    [--net] (name)\
    [-v] (name:container_path)\
    (image:version)
```

```
docker start (container_id)
```

```
docker stop (container_id)
```

```
docker logs (container_id) [-f] | [tail] | [grep]
```

```
docker exec [-it] (container_id) [sh|bash]
```

```
docker rm (container_id)
```

## start postgres db

```
docker run -d\
    --name cyber-treasure-app-db\
    -e POSTGRES_PASSWORD=(pwd)\
    -p 3001:5432\
    postgres:16.3
```

## psql main commands

```
psql [-d] (db_name) [-U] (user)
```

```
\q
```

```
\l
```

```
\c (db_name)
```

```
\dt
```

```
\d (table_name)
```

## docker-compose main commands

```
docker-compose [-f] (path) up [-d] [--build]
```

```
docker-compose [-f] (path) start
```

```
docker-compose [-f] (path) stop
```

```
docker-compose [-f] (path) down
```

## manage stage build

```shell
dotenv -e .env.production.local -- docker-compose up -d --build
```

```shell
dotenv -e .env.production.local -- docker-compose start
```

```shell
dotenv -e .env.production.local -- docker-compose stop
```

```shell
dotenv -e .env.production.local -- docker-compose down
```
