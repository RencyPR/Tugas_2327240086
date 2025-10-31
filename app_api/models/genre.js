const mongoose = require('mongoose')// impor mongoose

// skema untuk collection genre
const genreSchema = new mongoose.Schema ({
    genre:{
        type: String,
        required: true, // wajib diisi
        trim: true
    }
})
// sertakan skema genre ke dalam model Genre
const Genre = mongoose.model("Genre", genreSchema, "genre")
// expor model Genre
module.exports = Genre