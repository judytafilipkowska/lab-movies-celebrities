const router = require("express").Router();
const Celebrity = require("./../models/Celebrity.model")
/* GET home page */

router.get("/celebrities/create", (req, res) => {
    res.render("celebrities/new-celebrity")
})

router.post("/celebrities/create", (req, res) => {
    const { name, occupation, catchPhrase } = req.body;
    Celebrity.create({ name, occupation, catchPhrase })
        .then((createdCelebrity) => {
            console.log("new celeb:", createdCelebrity)
            res.redirect("/celebrities")
        })
        .catch((err) => {
            res.render("celebrities/new-celebrity")
        })
})

router.get("/celebrities", (req, res) => {
    Celebrity.find()
        .then((foundCeleb) => {
            res.render("celebrities/celebrities", { celebs: foundCeleb })
        })
        .catch((err) => {
            console.log(err);
        })
})



module.exports = router;


