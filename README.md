# API Endpoints
# Movies

### Popular movies
Get a list of movies ordered by popularity.
```js
const API_URL = "https://api.themoviedb.org/3/movie/popular"
```

### Now Playing
Get a list of movies that are currently in theatres.
```js
const API_URL = "https://api.themoviedb.org/3/movie/now_playing"
```

### Top Rated
Get a list of movies ordered by rating.

```js
const API_URL = "https://api.themoviedb.org/3/movie/top_rated"
```

### Upcoming
Get a list of movies that are being released soon.

```js
const API_URL = "https://api.themoviedb.org/3/movie/upcoming"
```

# Movie {id}


### Movie Detail
Get the top level details of a movie by ID.

```js
const API_URL = "https://api.themoviedb.org/3/movie/{movie_id}"
```

### Credits
:|

```js
const API_URL = "https://api.themoviedb.org/3/movie/{movie_id}/credits"
```

### Movie Images
Get the images that belong to a movie.

```js
const API_URL = "https://api.themoviedb.org/3/movie/{movie_id}/images"
```

### Keywords
:|
```js
const API_URL = "https://api.themoviedb.org/3/movie/{movie_id}/keywords"
```

### List
Get the lists that a movie has been added to.

```js
const API_URL = "https://api.themoviedb.org/3/movie/{movie_id}/lists"
```

### Recomendations
:|

```js
const API_URL = "https://api.themoviedb.org/3/movie/{movie_id}/recommendations"
```


### Similar
:|

```js
const API_URL = "https://api.themoviedb.org/3/movie/{movie_id}/similar"
```
### Movie videos
:|

```js
const API_URL = "https://api.themoviedb.org/3/movie/{movie_id}/videos"
```

# People

### People
Get a list of people ordered by popularity.

```js
const API_URL = "https://api.themoviedb.org/3/person/popular"
```

### Detail
Query the top level details of a person.

```js
const API_URL = "https://api.themoviedb.org/3/person/{person_id}"
```

### Combined Credits
Get the combined movie and TV credits that belong to a person.

```js
const API_URL = "https://api.themoviedb.org/3/person/{person_id}/combined_credits"
```

### Images
Get the profile images that belong to a person.

```js
const API_URL = "https://api.themoviedb.org/3/person/{person_id}/images"
```

### Movie Credits
Get the movie credits for a person.

```js
const API_URL = "https://api.themoviedb.org/3/person/{person_id}/movie_credits"
```
### TV Credits
Get the TV credits that belong to a person.
```js
const API_URL = "https://api.themoviedb.org/3/person/{person_id}/tv_credits"
```

<!-- SEARCH  -->
# Search
### Collections
Search for collections by their original, translated and alternative names

```js
const API_URL = "https://api.themoviedb.org/3/search/collection"
```

### Company
Search for companies by their original and alternative names.

```js
const API_URL = "https://api.themoviedb.org/3/search/company"
```

### Keyword
Search for keywords by their name.

```js
const API_URL = "https://api.themoviedb.org/3/search/keyword"
```

### Movie
Search for movies by their original, translated and alternative titles.

```js
const API_URL = "https://api.themoviedb.org/3/search/movie"
```

### Multi
Use multi search when you want to search for movies, TV shows and people in a single request.

```js
const API_URL = "https://api.themoviedb.org/3/search/multi"
```

### Person by full name
Search for people by their name and also known as names.

```js
const API_URL = "https://api.themoviedb.org/3/search/person"
```

### TV 
Search for TV shows by their original, translated and also known as names.

```js
const API_URL = "https://api.themoviedb.org/3/search/tv"
```

# Trending
### All
Get the trending movies, TV shows and people.

```js
const API_URL = "https://api.themoviedb.org/3/trending/all/{time_window}"

const time_window = "day" || "week"
```

### Movies
Get the trending movies on TMDB.

```js
const API_URL = "https://api.themoviedb.org/3/trending/movie/{time_window}"

const time_window = "day" || "week"
```

### People
Get the trending PEOPLE on TMDB.

```js
const API_URL = "https://api.themoviedb.org/3/trending/person/{time_window}"

const time_window = "day" || "week"
```

### TV
Get the trending TV on TMDB.

```js
const API_URL = "https://api.themoviedb.org/3/trending/tv/{time_window}"

const time_window = "day" || "week"
```

# TV SERIES LISTS
### Airing today
Get a list of TV shows airing today.

```js
const API_URL = "https://api.themoviedb.org/3/tv/airing_today"
```

### On the air
Get a list of TV shows that air in the next 7 days.

```js
const API_URL = "https://api.themoviedb.org/3/tv/on_the_air"
```

### Popular
Get a list of TV shows ordered by popularity.

```js
const API_URL = "https://api.themoviedb.org/3/tv/popular"
```
### Top Rated
Get a list of TV shows ordered by rating.

```js
const API_URL = "https://api.themoviedb.org/3/tv/top_rated"
```
