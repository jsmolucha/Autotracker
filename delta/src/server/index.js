const express = require("express")
const cors = require("cors");
const mysql = require('mysql');

const app = express();
const PORT = 3300;
app.use(cors());
app.use(express.json());

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "CuWr7sadr",
    database: "autotracker"
});

app.listen(PORT, ()=> {
    console.log(`server is running on ${PORT}` )
})


////////////////TEST QUERY///////////////////////
//get all from saleslog where dealer = STORE_NAME

app.get("/api/deals", (req, res)=> {
    conn.query("SELECT ALL DEAL FROM saleslog WHERE STORE_NAME = 'Napleton Hyundai'",(err, rows) => {
        if(err) {
            res.send(err);
        } else {
            res.send(fields);
        }
    });
    
});