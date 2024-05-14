const { Router } = require('express');
const LoginController = require('../controllers/LoginController');

const router = Router()

//router.get('/login', LoginController.validaLogin);
//router.get('/login', loginController.getAll);
router.post('/loginValidacao', LoginController.validaLogin);
router.post('/loginCadastro', LoginController.criaLogin);
router.put('/login/:id', LoginController.atualizaLogin);
router.delete('/login/:id', LoginController.apagaLogin);

module.exports = router