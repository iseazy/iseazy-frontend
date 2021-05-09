const path = require('path')
const express = require('express')
const app = express()

app.use('/dist', express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})


const port = process.argv[2] || 1111

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})