# moviedex-api

search for movies by genre, country or avg_vote
** requires authorization header with bearer token **

## install

`npm install`

## run

`npm run start`

## run with auto-reload on code change

`npm run dev`

## endpoints

    **GET /movie**

    Responds with an array of movies, filtered by user params

    Example Usage:

        /movie/?genre=comedy&country=unitedstates&avg_vote=5

    Headers:

        Authorization (Bearer Token, required)

    Params:

        ?genre (String, optional)
        ?country (String, optional)
        ?avg_score (Number, optional)


