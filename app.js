const express = require('express');
const postData = require('./mock/posts.json')
require('dotenv').config()

const app = express();

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send(process.env)
})

app.get('/posts', (req, res) => {
    res.send(postData.posts)
})

console.log(PORT);
console.log(process.env.USERID);


app.listen(PORT, () => console.log('server running...'))
