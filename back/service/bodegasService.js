const warehousesSchema = require('../schemas/bodegaSchema')

exports.getWarehouses = async () => {
    return await warehousesSchema.find({})
    .then(resolve => {
        return resolve
    })
    .catch(reject => {
        return reject
    })
}