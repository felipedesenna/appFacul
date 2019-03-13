const mongoose = require('mongoose');

const CalculadoraSchema = new mongoose.Schema({
    sex: Boolean,
    age: Number,
    height: Number,
    weight: Number,
    physicalActivity: Boolean
});

module.exports = mongoose.model('Calculadora', CalculadoraSchema);
