const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");

let app = express();

//Part One: using get

// app.get("/", (req, res) => {

//     res.send("Hello from the web server side...")

// });

//Part Two: using express static and middleware

// app.use((req, res, next) => {
//     console.log(req.url);
//     next();
// })

// app.use(express.static(path.join(__dirname, "../public")));

//Part Three: Advanced 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/formsubmissions", (req, res) => {

    fs.appendFileSync("contact-info.json", `${req.body.name}, ${req.body.email}`)
    res.send("Contact submitted");
    next();
    
})


app.get("/formsubmissions", (req, res) => {
    
    res.send(`${name}, ${email}`);
    
});

app.use(express.static(path.join(__dirname, "../public")));

app.listen(3000);