const bodegasService = require('../service/bodegasService')

exports.getBodegas = async(req, res, next) => {
    try {
        let warehouses = await bodegasService.getBodegas()
        if(warehouses.length === 0){
            throw 'Not Found'
        }
        res.status(200).json({"data": warehouses})
    } catch (error) {
        res.status(404).json({"reject": error})
    }
}

exports.updateProductList = async(req, res, next) => {
    try {
        let updated = await bodegasService.updateProducts(req.body)
        if(!updated){
            throw 'user does not exist'
        }
        res.status(200).json({"response": 'list updated'})
    } catch (error) {
        res.status(404).json({"reject": error})
    }
}

exports.getOneBodega = async(req, res, next) =>{
    try {
        const bodega = await bodegasService.getOneBodega(req.params.idBodega);
        if(bodega.length === 0){
            throw 'Bodega not Found'
        }
        res.status(200).json({"data": bodega})
    } catch(error) {
        res.status(404).json({"reject": error})
    }
}

exports.consultProduct = async(req, res, next) =>{
    try {
        const bodega = await bodegasService.getOneBodega(req.body.idBodega);
        if(bodega.length === 0){
            throw 'Bodega not Found'
        }
        
        let exist = await productExist(bodega, req.body.idProduct)
        
        res.status(200).json({"data": exist})
    } catch(error) {
        res.status(404).json({"reject": error})
    }
}

const productExist = (bodega, idProduct) =>{
    let productList = bodega[0].productos;
    for (let index = 0; index < productList.length; index++) {
        if(productList[index].idProducto === idProduct){
            return productList[index];
        }
    }
    return false;
}