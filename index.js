const express = require('express');
require('dotenv').config()
console.log(process.env);

const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('<h1>Hello this is Backend</h1>')
})

app.get('/login', (req, res) => {
    res.send('<h1> this is Login page</h1>')
})
app.get('/signup', (req, res) => {
    res.send('<h1> this is Sign Up page</h1>')
})

app.listen(port, () => {
    console.log(`server is runnig on port ${port}`)
});