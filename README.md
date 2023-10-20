# Netflix 2.0 🚀

Hello Guy ! Im Super exicted to share this built with you guys, A Netflix 2.0. This is a Netflix clone Developed using ReactJS ,Redux,Firebase Auth. I have tried to replicate as close as i could to netflix app. _Clone this repo guys, give it a test 😊_

## Features

- SignUp/Login Feature
- Catergory Feature
- Search Movie
- Firebase Authentication
- Stripe payment Integration
- Redux Implementation
- Responsiveness

## Demo

#### Will be Aailable Soon !

## API Reference

I have used a _ The Movie Database (TMDB) TMDB _ to fetch the last, trending and different categories of movies

### BaseUrl

```javascript
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
```

#### Get Trending Movie

```https
  GET /trending/all/week?api_key=${API_KEY}&language=en-US
```

#### Get Netflix Orignals

```https
 /discover/tv?api_key=${API_KEY}&with_networks=213
```

#### Get Comedy Movies

```https
/discover/movie?api_key=${API_KEY}&with_genres=35
```

#### Get Documentaries

```https
/discover/movie?api_key=${API_KEY}&with_genres=99
```

#### Get Top Rated

```https
/movie/top_rated?api_key=${API_KEY}&language=en-US
```

#### Get Action Movies

```https
/discover/movie?api_key=${API_KEY}&with_genres=28
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `API_KEY` | `string` | **Required**. Your API key |

## Run locally

Run this project on your localport 300 💻

```bash
 git clone 'https://github.com/Zajjaj-Khan/Netflix-clone2.0.git'
```

Make sure you have **node** and **npm** installed in your computer
Run this commond inside the project directory to install all the packages required.

```bash
  npm install
```

To run the application on port 3000 type:

```bash
npm start
```

in your terminal.

## Color Reference

| Color         | Hex                                                              |
| ------------- | ---------------------------------------------------------------- |
| Neflix Red    | ![#e50914](https://via.placeholder.com/10/e50914?text=+) #e50914 |
| Text/Headings | ![#fff](https://via.placeholder.com/10/fff?text=+) #fff          |
| Black         | ![#111](https://via.placeholder.com/10/111?text=+) #111          |


## Screenshots
![project image](https://github.com/Zajjaj-Khan/Netflix-clone2.0/blob/master/images/main.jpg)
