const express = require('express');
const client = require ('./db.js')
const cartRoute = require('./src/routes/cartRoute.js')

const app = express();
const port = 3000;


app.use(express.json())

app.get('/', (req, res) =>{
    res.send('Hello World')
})

app.get('/boas-Vindas', (req, res) =>{
    res.send('Seja bem-vindo')

})

app.use('/carrinho', cartRoute)

app.listen(port, () =>{
    console.log(`Servidor rodando na url http://localhost:${port}`)
})