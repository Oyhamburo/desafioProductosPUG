const express = require('express')
const {Router} = express
const app = Router()
const db = require('../db/dbProductos')
const DB = new db()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// get para traer todos los productos 
app.get('/',(req,res) => {
    try{
        res.render('main')
    } catch (err) {
        res.status(400).send({
            error: err
        })
    }
})
// get para traer un solo por producto por id
app.get('/productos', async(req,res) => {
    try{
        const productos = await DB.getAll()
        return res.render('productos', {
            layout: 'productos',
            productos
        })
    } catch (err) {
        res.status(400).send({
            error: err
        })
    }
})
// post para agregar un producto y mostralo
app.post('/productos', async (req,res) =>{
    const producto = req.body
    try{
        await DB.save(producto)
        res.redirect('/')
    } catch (err) {
        res.send({
            error: true,
            err
        })
    }
})

module.exports = app;