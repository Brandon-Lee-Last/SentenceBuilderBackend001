const mongoose = require('mongoose');

const SentenceSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    sentence: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Sentences = mongoose.model('sentences', SentenceSchema);