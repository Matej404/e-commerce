const express = require("express")
const router = express.Router()
const client = require('../databasepg')

router.get('/', (req, res) => {
   client.query(`Select * from accounts`, (err, result) => {
        if(!err) {
            res.send(result.rows)
        }
    })
    client.end;
    
})

client.connect();

router.get("/new", (req, res) => {
    res.send('User New Form')
})

module.exports = router