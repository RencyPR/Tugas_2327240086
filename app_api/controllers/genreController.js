// impor model Genre
const genreSchema = require("../models/genre")

// fungsi untuk mengambil isi collection genre (GET)
const getAllGenre = async (req, res) => {
    try {
        //GET collection genre
        const result = await genreSchema.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message: error})
    }
}
// fungsi untuk mengambil isi collection genre (GET/:id)
const getGenreById = async (req, res) => {
    try {
        //GET collection game berdasarkan parameter id
        const result = await genreSchema.findById(req.params.id)
        if(!result){
            res.status(404).json({message: "Genre tidak ditemukan"})
        }else{
            // Jika data genre ada
            res.status(200).json(result)
        }
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message: error})
    }
}

// Membuat genre baru (POST)
const createGenre = async (req, res) => {
//Membuat instance genre baru
const genre = new genreSchema ({ // Disesuaikan
    genre: req.body.genre
})
try{
    //Menyimpan genre baru ke database
    const hasil = await genre.save();
    //beri respon json HTTP_CREATED
    res.status(201).json(hasil);
    } catch (error) {
    res.status(400).json({message: error})
    }
}

// fungsi untuk mengubah isi collection genre (PUT)
const updateGenreById = async (req, res) => {
    try {

        // GET collection genre berdasarkan parameter id
        const result = await genreSchema.findById(req.params.id)
        if(!result) {  // Jika data fakultas tidak ada pada MongoDB
            res.status(404).json({ message: "Genre tidak ditemukan"})
        } else { // Jika data fakultas ada
            // jika ada request perubahan genre
            if(req.body.genre != null) {
                result.genre = req.body.genre
            }
            // update data genre 
            const updateGanre = await result.save()
            res.status(200).json(updateGanre)
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
// fungsi menghapus isi collection genre (DELETE)
const deleteGenreById = async (req, res) => {
    try {
        //GET collection genre berdasarkan parameter id
        const result = await genreSchema.findById(req.params.id)
        if(!result){
            // jika data genre tidak ada di mongo DB
            res.status(404).json({message: "Genre tidak ditemukan"})
        }else{
            // Jika data genre ada, maka hapus data genre berdasarkan id
            await result.deleteOne();
            res.status(200).json({message: "Genre berhasil dihapus"})
        }
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message: error})
    }
}
// export
module.exports = {
    getAllGenre,
    getGenreById,
    updateGenreById,
    deleteGenreById,
    createGenre
}