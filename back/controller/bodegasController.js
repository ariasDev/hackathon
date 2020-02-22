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
