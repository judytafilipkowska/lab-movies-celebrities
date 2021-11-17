const router = require("express").Router();
const Celebrity = require("./../models/Celebrity.model")
/* GET home page */
router.get("/celebrities", (req, res) => {
  res.render("celebrities/celebrities");
});

router.get("/celebrities/create", (req, res) => {
    res.render("celebrities/new-celebrity")
})

router.post("/", (req, res) => {
    const { name, occupation, catchPhrase } = req.body ;
    Celebrity.create({name, occupation, catchPhrase})
        .then((createdCelebrity) => {
            console.log("new celeb:",createdCelebrity )
            res.redirect("/celebrities/create")
        })
        .catch((err) => {
            res.render("celebrities/new-celebrity")
        })
})

router.get("/", (req, res) => {
    Celebrity
    .find()
    .then((celebrities) => {
        res.render("/celebrities/celebrities", {celebrities})
    .catch((err) => {
        console.log(err);
    })
    })
})


module.exports = router;


