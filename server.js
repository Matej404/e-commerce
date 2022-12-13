const express = require('express')
const app = express()
const PORT = 3000
const client = require('./databasepg')

app.get("/", (req, res) => {
    res.send('HI')
})

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
  })

  app.get('/users', (req, res) => {
    client.query(`Select * from accounts`, (err, result) => {
        if(!err) {
            res.send(result.rows)
        }
    })
    client.end;
})

client.connect();
