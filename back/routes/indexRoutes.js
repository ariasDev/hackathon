const express = require("express"),
    router = express.Router(),
    productsController = require('../controller/collaborator');

router.get("/prueba", productsController.prueba);


module.exports = router;
