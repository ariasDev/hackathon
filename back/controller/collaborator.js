const express = require("express");
const router = express.Router();

exports.prueba = async(req, res, next) => {
    res.status(200).json({"respuesta": "servidor melo caramelo"});
};

