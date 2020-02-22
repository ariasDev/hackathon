const facturasSchema = require('../schemas/facturasSchema')

exports.getFacturas = async () => {
    return await facturasSchema.find({})
    .then(resolve => {
        return resolve
    })
    .catch(reject => {
        return reject
    })
}

exports.registarFactura = async (body) => {
    const facturaToSave = new facturasSchema({
        idFactura: body.idFactura,
        fecha: body.fecha,
        valorTotal: body.valorTotal,
        productos: body.productos

    })
    return await facturaToSave.save()
    .then(resolve => {
        return true
    })
    .catch(reject => {
        return false
    })

}


exports.deleteFactura = async (id) => {
    return await facturasSchema.deleteOne({idFactura : id})
}