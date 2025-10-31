const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(
            // ambil drivers di mongodb.com
            "mongodb+srv://ren:123456ren@cluster0.frs2k32.mongodb.net/tugas?retryWrites=true&w=majority&appName=Cluster0"
        );
        console.log("MongoDB connected.");
    } catch (error) {
        console.error("Error : ", error);
        process.exit(1);
    }
}

module.exports = connectDB;