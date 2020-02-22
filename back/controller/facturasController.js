const facturasService = require('../service/facturasService')

exports.getFacturas = async(req, res, next) => {
    try {
        let facturas = await facturasService.getFacturas()
        if(facturas.length === 0){
            throw 'Not Found'
        }
        res.status(200).json({"data": facturas})
    } catch (error) {
        res.status(404).json({"reject": error})
    }
}

exports.registarFactura = async (req, res, next) => {
    try {
        let saved = await facturasService.registarFactura(req.body)
        if(!saved){
            throw 'error al registrar la factura'
        }
        res.status(201).json({"resolve" : "factura registrada"})
    } catch (error) {
        res.status(400).json({"reject": error})
    }
}

exports.deleteFactura = async (req, res, next) => {

}

