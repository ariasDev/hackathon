const express = require("express"),
    router = express.Router(),
    productsController = require('../controller/collaborator');

const bodegasController = require('../controller/bodegasController')

router.get("/prueba", productsController.prueba);
router.get("/getBodegas", bodegasController.getBodegas);
router.put("/updateBodega", bodegasController.updateProductList)


module.exports = router;
