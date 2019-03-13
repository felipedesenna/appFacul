const Calculadora = require('../models/Calculadora');

module.exports = {
    async store(req, res) {
        const imc = await Calculadora.create(req.body);

        return res.json(imc);
    }
};
