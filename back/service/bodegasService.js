const bodegasSchema = require('../schemas/bodegaSchema')

exports.getBodegas = async () => {
    return await bodegasSchema.find({})
    .then(resolve => {
        return resolve
    })
    .catch(reject => {
        return reject
    })
}

exports.updateProducts = async (body) => {
    const filter = { idBodega: body.idBodega };
    const update = {productos: body.productos};
    return await bodegasSchema.findOneAndUpdate(filter, update);
}

exports.getOneBodega = async (id) => {
    return await bodegasSchema.find({idBodega: id})
}