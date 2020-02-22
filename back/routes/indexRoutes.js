const express = require("express"),
    router = express.Router(),
    productsController = require('../controller/collaborator');

const bodegasController = require('../controller/bodegasController')

router.get("/prueba", productsController.prueba);
router.get("/getBodegas", bodegasController.getBodegas);
router.get("/getOneBodega/:idBodega", bodegasController.getOneBodega)
router.post("/consultProduct", bodegasController.consultProduct)
router.put("/updateBodega", bodegasController.updateProductList);


module.exports = router;
