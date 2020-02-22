const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const bodegaSchema = Schema({
  idBodega: {
    type: Number,
    required: true,
  },
  productos: {
    type: Object,
    required: true,
  }
});

const warehouse = mongoose.model("bodega", bodegaSchema);
module.exports = warehouse;