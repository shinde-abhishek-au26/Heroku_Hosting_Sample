const express = require('express');
const app = express();
const postData = require('./mock/posts.json')


app.get('/', (req, res) => {
    res.send("hello")
})

app.get('/posts', (req, res) => {
    res.send(postData.posts)
})



app.listen(3000, () => console.log('server running...'))
