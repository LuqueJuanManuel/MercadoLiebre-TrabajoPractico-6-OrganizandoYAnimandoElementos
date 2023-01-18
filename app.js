const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

app.use(express.static("public"));



app.listen(PORT, () => {
    console.log(`
    Server listen in port ${PORT}
    http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/home.html"))
});

app.get("/Register", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/register.html"))
});

app.get("/Login", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/login.html"))
});