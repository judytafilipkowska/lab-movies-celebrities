const router = require("express").Router();
const Movie = require("./../models/Movie.model")
/* GET home page */
router.get("/new-movie", (req, res) => {
  res.render("movies/new-movie");
});