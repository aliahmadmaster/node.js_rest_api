const express = require("express");
const { urlencoded } = require("express");
const app = express();
const port = 3200;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let movies = [
  {
    id: "1",
    title: "incaption",
    director: "Jones",
    release_date: "2018-04-19",
  },
  {
    id: "2",
    title: "The Wolf",
    director: "Martin",
    release_date: "2010-01-05",
  },
  {
    id: "3",
    title: "Herry Potter",
    director: "Terry",
    release_date: "2017-07-16",
  },
  {
    id: "4",
    title: "Wanted",
    director: "Nolen",
    release_date: "2016-09-26",
  },
  {
    id: "5",
    title: "Joker",
    director: "Christopher",
    release_date: "2012-03-02",
  },
];
app.post("/movie", (req, res) => {
  const movie = req.body;
  console.log(movie);
  movies.push(movie);
  res.send("movie is added successfully");
});
app.get("/movie", (req, res) => {
  res.json(movies);
});

app.get("/movie/:id", (req, res) => {
  const id = req.params.id;

  for (let movie of movies) {
    if (movie.id === id) {
      res.json(movie);
      return;
    }
  }
  res.status(404).send("movie not found");
});
app.delete("/movie/:id", (req, res) => {
  const id = req.params.id;

  movies = movies.filter((movies) => {
    if (movies.id !== id) {
      return true;
    }
    return false;
  });
  res.send("movie is deleted");
});

app.listen(port, () => console.log("Server is listening on port " + port));
