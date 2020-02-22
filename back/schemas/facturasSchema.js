const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const facturasSchema = Schema({
  idFactura: {
    type: Number,
    required: true,
  },
  fecha: {
    type: String,
    required: true,
  },
  valorTotal: {
    type: Number,
    required: true,
  },
  productos: {
    type: Object,
    required: true,
  }
});

const warehouse = mongoose.model("factura", facturasSchema);
module.exports = warehouse;