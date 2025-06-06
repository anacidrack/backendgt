 const router = requeire ('express').Router()
 
 const {registrar, login} = require('../controllers/userController.js')



 router.post('/register',registrar) 

 router.post('/longin', login)

 module.exports = router