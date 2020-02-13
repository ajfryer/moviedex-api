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

&nbsp;`/movie/?genre=comedy&country=unitedstates&avg_vote=5`

Headers:

&nbsp;Authorization (Bearer Token, required)

Params:

&nbsp;?genre (String, optional)
&nbsp;?country (String, optional)
&nbsp;?avg_score (Number, optional)


