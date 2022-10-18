const express = require('express')
const app = express()
const productosRouter = require('./routes/productos')

app.set('views','./views')
app.set('view engine', 'pug')

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use('/', productosRouter)

const server = app.listen(8080, () => {
    console.log('servidor iniciado')
})

server.on('error', (error) => {
    console.error(`Error: ${error}`)
})