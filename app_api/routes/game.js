const express = require("express")
const router = express.Router();

//impor gameController
const gameController = require("../controllers/gameController")

// route GET game
router.get("/", gameController.getAllGame)

// route GET game berdasarkan ID
router.get("/:id",gameController.getGameById)

//route POST game
router.post("/",gameController.createGame)

//route PUT game berdasarkan ID
router.put("/:id",gameController.updateGameById)

// route Delete game berdasarakan ID
router.delete("/:id",gameController.deleteGameById)

//expor module
module.exports = router