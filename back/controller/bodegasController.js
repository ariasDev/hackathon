const bodegasService = require('../service/bodegasService')

exports.getWarehouses = async(req, res, next) => {
    try {
        let warehouses = await bodegasService.getWarehouses()
        if(warehouses.length === 0){
            throw 'Not Found'
        }
        res.status(200).json({"data": warehouses})
    } catch (error) {
        res.status(404).json({"reject": error})
    }
    
}

exports.update