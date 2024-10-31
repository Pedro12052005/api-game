const mongoose = require('mongoose') // cria a variavel
const GameSchema = new mongoose.Schema({
    name: {type: String, required: true },
    value: {type: Number, required: true},
    releaseYear: {type: Number, required: true},
    rating: {type: String, required: true},
    image: {type: String, required: true} // caminho da imagem salva
});

module.exports = mongoose.model('Game', GameSchema);