const mongoose = require('mongoose')// impor mongoose

// skema untuk collection game
const gameSchema = new mongoose.Schema ({
    nama:{
        type: String,
        required: true, // wajib diisi
        trim: true
    },
    genre_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Genre",
        required: true
    },
    des: {
        type: String,
        required: true,
        trim: true
    },
    tanggalRilis:{
        type: Date,
        required: true,
        trim: true
    }
})
// sertakan skema game ke dalam model Game
const Game = mongoose.model("Game", gameSchema, "game");
// expor model game
module.exports = Game