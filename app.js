const express = require("express")
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello world!")
})

app.listen(3333, () => {
    console.log("Listening on port 3333")
})