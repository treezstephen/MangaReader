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

## Setup MangaDex connection
1. Create .env for both api-gateway and manga-service off .env.example

2. Create MangaDex account and fill in Username and Password in MangaService's .env

3. Run docker-compose up

4. Go to verify connection is made
```
http://localhost:3999/mangas/session
```
