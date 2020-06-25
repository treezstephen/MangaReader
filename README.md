# MangaReader

## How to run

1. Install Docker

2. Run docker-compose cmd
```sh
docker-compose up
```

3. Run command to verify 3 containers are created
```sh
docker ps
```

4. Verify routes are working
```
http://localhost:3999/
http://localhost:4999/
http://localhost:4999/graphql
```

5. Swagger Documentation

api-gateway:   http://localhost:4999/documentation
manga-service: http://localhost:3999/documentation
