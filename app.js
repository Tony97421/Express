const express = require("express");

const app = express();

const port = 5000;

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

app.get("/", (req, res) => {
  res.send("Welcom to my favorite movie list");
});

app.get("/api/movies", (req, res) => {
  res.status(200).json(movies);
});

app.get("/api/movies/:id", (req, res) => {
  const movie = movies.find((movie) => movie.id === parseInt(req.params.id));

  if (movie === undefined) {
    res.status(404).send("not found");
  } else {
    res.status(200).json(movie);
  }
});

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const express = require("express");
// const app = express();

// const port = 5000;

// app.get("/", (err, res) => {
//   res.send("Welcom to Express");
// });

// const welcomeName = (req, res) => {
//     res.send(`Welcome ${req.params.name}`);
// };

// app.get("/users/:name", welcomeName);

// app.listen(port, (err) => {
//   if (err) {
//     console.error("Something bad happened");
//   } else {
//     console.log(`Server is listening on ${port}`);
//   }
// });
