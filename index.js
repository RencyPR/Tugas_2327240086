const express = require("express")// impor module express
const expressLayouts = require("express-ejs-layouts");//impor express-ejs-layout
const app = express(); //buat express application
const port = 3000; //port yang akan digunakan

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static("public"))

app.get("/",(req, res) => {
    res.render('about',{title: "About", layout: "main"});
} )
app.get("/topFilm",(req, res) => {
    res.render('topFilm',{title: "TopFilm", layout: "main"});
} )
app.get("/list", (req, res) => {
    res.json({
        status: "success",
        message: "List Film",
        data: [{No: "1.", Film:"HIM"},
            {No: "2.", Film:"One Battle After Another"},
            {No: "3.", Film:"The Long Walk"},
            {No: "4.", Film:"A Big Bold Beautiful Jurney"},
            {No: "5.", Film:"Weapons"}]
    })
})
app.listen(port,()=> {
    console.log(`Server dapat diakses : http://localhost:${port}`);
})
