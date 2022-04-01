const express = require('express');
const postData = require('./mock/posts.json')

const app = express();

const PORT = process.env.PORT || 3001


app.get('/', (req, res) => {
    res.send("hello")
})

app.get('/posts', (req, res) => {
    res.send(postData.posts)
})



app.listen(PORT, () => console.log('server running...'))
