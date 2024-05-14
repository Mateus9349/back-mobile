const { Router } = require('express');
const CollectsController = require('../controllers/CollectsController');

const router = Router()


//router.get('/Collects', CollectsController.getAll);
router.post('/collects', CollectsController.criaCollect);
//router.put('/Collects/:id', CollectsController.atualizaUsuario);
//router.delete('/Collects/:id', CollectsController.apagaUsuario);

module.exports = router