const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProdutosSchema = new Schema({
    nome: {type: String, required: true, max: 100},
    calorias:{type: Number, required: true}
});

module.exports = mongoose.model('Produtos',ProdutosSchema);