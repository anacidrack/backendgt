const router = require('express').Router();

router.get('/:id/itens', async (req, res) => {
  const {id} = req.params
  await client.query(
    'SELECt * FROM cart_item WHERE cart_id = $1',
    [id]
  )
  res.status(200).json(result.rows)

})
    router.post('/', (req, res) => {
    res.send('Criar carrinho')
})

router.post('/item', (req, res) => {
    res.send('Adicionar item carrinho')
})

    router.post('/item/:id', (req, res) => {
    res.send('Alterar a quantidade do item carrinho')
})

  router.post('/item/:id', (req, res) => {
    res.send('Deletar item carrinho')
})

    router.post('/:id/itens', (req, res) => {
    res.send('Deletar carrinho')
})


module.exports = router;