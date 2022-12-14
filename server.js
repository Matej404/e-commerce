const express = require('express')
const app = express()
const PORT = 3000
const bcrypt = require('bcrypt')


app.get("/", (req, res) => {
    res.send('HI')
})

const userRouter = require('./routes/users')
app.use('/users', userRouter)


//passport
const users = []

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))


app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.post('/login', (req, res) => {
    
})


app.get('/register', (req, res) => {
    res.render('register.ejs')
})

app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')
    } catch {
        res.redirect('/register')
    }
    console.log(users)
})

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
  })
