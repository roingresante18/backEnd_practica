const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(__dirname+'/public'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.get('/', (req, res) => res.sendFile(path.join(__dirname,'views/index.html')))
app.get('/producto', (req, res) => res.sendFile(path.join(__dirname,'views/producto.html')))
app.get('/producto/1', (req, res) => res.sendFile(path.join(__dirname,'views/producto1.html')))