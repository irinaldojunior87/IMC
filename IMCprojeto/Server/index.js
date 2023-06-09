const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "bdprojeto",
})

app.post("/user", (req, res) => {
    const { username, password, email, fullname } = req.body;
    let SQL = "INSERT INTO user (username, password, email, fullname) VALUES (?,?,?,?)";
    let values = { username, password, email, fullname };
    db.query(SQL, values, (err, result) => {
        console.log(err)
    })
});

app.get("/users", (req, res) => {
    const { username, password } = req.body;
    let SQL = "SELECT * FROM user WHERE username = ? AND password = ?";
    let values = { username, password };
    db.query(SQL, values, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result);
        }
    })
});


app.listen(3001, () => {
    console.log("rodando servidor");
})