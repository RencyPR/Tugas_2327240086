const express = require("express")
const router = express.Router();

//impor genreController
const genreController = require("../controllers/genreController")

// route GET genre
router.get("/", genreController.getAllGenre)

// route GET genre berdasarkan ID
router.get("/:id",genreController.getGenreById)

//route POST genre
router.post("/",genreController.createGenre)

//route PUT genre berdasarkan ID
router.put("/:id",genreController.updateGenreById)

// route Delete genre berdasarakan ID
router.delete("/:id",genreController.deleteGenreById)

//expor module
module.exports = router