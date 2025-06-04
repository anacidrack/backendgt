const router = require('express').Router();
const { inserirItens, alterarItens, deletarItens} = require('../controllers/cartItemController')



 //insere itens no carrinho
router.get('/:id/itens', insereItens
 )

 //Alterar a quantidade item carrinho
router.get('/:id/itens', alterarItens)

//deleta item
router.get('/:id/itens', deletarItens)