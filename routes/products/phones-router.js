let router = require('express').Router();
let PhonesControler = require('../../controlers/products/phones-controller');

router.get('/', PhonesControler.findAll);
router.post('/', PhonesControler.create);
router.get('/:id', PhonesControler.findById);

module.exports = router;