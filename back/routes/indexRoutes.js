const express = require("express");
const router = express.Router();
const productsController = require('../controller/collaborator');

const bodegasController = require('../controller/bodegasController');
const facturasController = require('../controller/facturasController');

router.get("/prueba", productsController.prueba);

router.get("/getBodegas", bodegasController.getBodegas);
router.get("/getOneBodega/:idBodega", bodegasController.getOneBodega);
router.post("/consultProduct", bodegasController.consultProduct);
router.put("/updateBodega", bodegasController.updateProductList);


router.get('/getFacturas', facturasController.getFacturas);
router.post('/postFactura', facturasController.registarFactura);
router.delete('/deleteFactura/:id', facturasController.deleteFactura);
router.put('/updateFactura', facturasController.updateFactura)

module.exports = router;
