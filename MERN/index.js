const express = require("express");
const color = require("colors")

const app = express();



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(color.bgGreen.black(`Working on http://localhost:${PORT}`))
})