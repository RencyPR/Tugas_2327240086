// impor model Prodi
const gameSchema = require("../models/game")

// fungsi untuk mengambil isi collection game (GET)
const getAllGame = async (req, res) => {
    try {
        //GET collection game
        const result = await gameSchema.find().populate
        ("genre_id","genre")
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message: error})
    }
}
// fungsi untuk mengambil isi collection game (GET/:id)
const getGameById = async (req, res) => {
    try {
        //GET collection game berdasarkan parameter id
        const result = await gameSchema.findById(req.params.id)
        if(!result){
            res.status(404).json({message: "Game tidak ditemukan"})
        }else{
            // Jika data genre ada
            res.status(200).json(result)
        }
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message: error})
    }
}
// Membuat game baru (POST)
const createGame = async (req, res) => {
//Membuat instance game baru
const game = new gameSchema ({ // Disesuaikan
    nama: req.body.nama,
    genre_id: req.body.genre_id,
    des: req.body.des,
    tanggalRilis: req.body.tanggalRilis
})
try{
    //Menyimpan game baru ke database
    const hasil = await game.save();
    //beri respon json HTTP_CREATED
    res.status(201).json(hasil);
    } catch (error) {
    res.status(400).json({message: error})
    }
}
// fungsi untuk mengubah isi collection game (PUT)
const updateGameById = async (req, res) => {
    try {

        // GET collection game berdasarkan parameter id
        const result = await gameSchema.findById(req.params.id)
        if(!result) {  // Jika data fakultas tidak ada pada MongoDB
            res.status(404).json({ message: "Game tidak ditemukan"})
        } else { // Jika data fakultas ada
            // jika ada request perubahan genre
            if(req.body.nama != null) {
                result.nama = req.body.nama
            }
            if(req.body.des != null) {
                result.des = req.body.des
            }
            if(req.body.tanggalRilis != null) {
                result.tanggalRilis = req.body.tanggalRilis
            }
            // update data game 
            const updateGame = await result.save()
            res.status(200).json(updateGame)
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
// fungsi menghapus isi collection game (DELETE)
const deleteGameById = async (req, res) => {
    try {
        //GET collection game berdasarkan parameter id
        const result = await gameSchema.findById(req.params.id)
        if(!result){
            // jika data game tidak ada di mongo DB
            res.status(404).json({message: "Game tidak ditemukan"})
        }else{
            // Jika data game ada, maka hapus data game berdasarkan id
            await result.deleteOne();
            res.status(200).json({message: "Game berhasil dihapus"})
        }
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message: error})
    }
}
// export
module.exports = {
    getAllGame,
    getGameById,
    createGame,
    updateGameById,
    deleteGameById
}