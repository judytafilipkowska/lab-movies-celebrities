const router = require("express").Router();
const Movie = require("./../models/Movie.model")
const Celebrity = require("./../models/Celebrity.model")
/* GET home page */
router.get("/movies/create", (req, res) => {
  res.render("movies/new-movie");
});

router.get("/movies/create", (req, res) => {
  const { title, genre, plot, cast } = req.body
  Movie.create({ title, genre, plot, cast })
    .then((createdMovie) => {
      res.redirect("/movies")
    })
    .catch((err) => {
      res.render("movies/new-movie")
    })
})


module.exporst = router;