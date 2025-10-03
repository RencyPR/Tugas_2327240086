const express = require("express")// impor module express
const expressLayouts = require("express-ejs-layouts");//impor express-ejs-layout
const app = express(); //buat express application
const port = 3000; //port yang akan digunakan

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static("public"))

app.get("/",(req, res) => {
    res.render('info',{title: "Info", layout: "main"});
} )
app.get("/topGame",(req, res) => {
    res.render('topGame',{title: "TopGame", layout: "main"});
} )
app.get("/list", (req, res) => {
    res.json({
        pesan: ['List Game Dengan Jumlah Pemainnya'],
        data: [{No: "1.", Game:"Fortnite", Pemain: 30950114},
            {No: "2.", Game:"Roblox",Pemain: 27718738},
            {No: "3.", Game:"Minecraft",Pemain: 23767529},
            {No: "4.", Game:"League of Legends",Pemain: 11386716 },
            {No: "5.", Game:"Counter-Strike 2",Pemain: 4279682}]
    })
})
app.listen(port,()=> {
    console.log(`Server dapat diakses : http://localhost:${port}`);
})
