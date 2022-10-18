class baseDeDatos {
    constructor() {
        this.productos = [{
                "title": "Frutilla",
                "price": 225,
                "img": "https://cdn3.iconfinder.com/data/icons/spring-2-1/30/Strawberry-256.png",
                "id": 1
            },
            {
                "title": "Uva",
                "price": 130,
                "img": "https://cdn1.iconfinder.com/data/icons/summer-drink/30/Grapes-9-512.png",
                "id": 2
            },
            {
                "title": "Banana",
                "price": 150,
                "img": "https://cdn1.iconfinder.com/data/icons/summer-drink/30/Bananas-512.png",
                "id": 3
            }
        ]
    }
    async save(objeto) {
        try {
            if (this.productos.length > 0) {
                let maxId = this.productos[0].id
                for (let i = 0; i < this.productos.length; i++) {
                    if (maxId < this.productos[i].id) {
                        maxId = this.productos[i].id
                    }
                    objeto.id = maxId + 1
                }
            } else {
                objeto.id = 1
            }
            this.productos.push(objeto)

            return objeto.id
        } catch (err) {
            console.error(`hubo un error al guardar el archivo : ${err}`)
        }
    }
    async getById(numero) {
        try {

            let encontrado = this.productos.find(objeto => objeto.id === parseInt(numero))
            if (encontrado) {
                return encontrado
            } else {
                return null
            }
        } catch (err) {
            console.log(`hubo un error al buscar por id : ${err}`)
        }
    }

    async updateById(id, producto) {
        try {
            let encontrado = this.productos.findIndex(objeto => objeto.id === parseInt(id))
            if (encontrado != -1) {
                producto.id = id
                this.productos[encontrado] = producto
                return producto
            } else {
                return null
            }
        } catch (err) {
            console.log(`hubo un error al buscar por id : ${err}`)
        }
    }

    async getAll() {
        try {
            if (this.productos.length > 0) {
                return this.productos
            } else {
                return null
            }
        } catch (err) {
            console.log(`hubo un error al buscar todos : ${err}`)
        }
    }
    async deleteById(numero) {
        try {
            let encontrado = this.productos.find(objeto => objeto.id === parseInt(numero))
            if (encontrado) {
                let filtrado = this.productos.filter(objeto => objeto.id !== parseInt(numero))
                this.productos = filtrado
                return {
                    eliminado: encontrado
                }
            } else {
                return null
            }

        } catch (err) {
            console.log(`hubo un error al borrar por id : ${err}`)
        }
    }
    async deleteAll() {
        try {
            this.productos = []

        } catch (err) {
            console.log(`hubo un error al borrar todos : ${err}`)
        }
    }
}

module.exports = baseDeDatos