# Getting Started

TODO

# Code Overview

## Requirements

moviedex-api is an Express app that meets the following specs:

1. Users can search for Movies by genre, country or avg_vote
1. The endpoint is GET /movie
1. The search options for genre, country, and/or average vote are provided in query string parameters.
1. When searching by genre, users are searching for whether the Movie's genre includes a specified string. The search should be case insensitive.
1. When searching by country, users are searching for whether the Movie's country includes a specified string. The search should be case insensitive.
1. When searching by average vote, users are searching for Movies with an avg_vote that is greater than or equal to the supplied number.
1. The API responds with an array of full movie entries for the search results
1. The endpoint only responds when given a valid Authorization header with a Bearer API token value.
1. The endpoint should have general security in place such as best practice headers and support for CORS.

## Dependencies

## Application Structure

## Authentication
