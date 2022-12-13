const express = require('express')
const app = express()
const PORT = 3000


app.get("/", (req, res) => {
    res.send('HI')
})

const userRouter = require('./routes/users')
app.use('/users', userRouter)

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
  })
