const express = require('express');
const router = express.Router();

const produtos_controller = require('../controllers/produtos.controller');

router.get('/', produtos_controller.test);
router.post('/inserir', produtos_controller.inserir);
router.get('/:id',produtos_controller.detalhes);
router.put('/:id/update', produtos_controller.update);
router.delete('/:id/delete',produtos_controller.delete);


module.exports = router;