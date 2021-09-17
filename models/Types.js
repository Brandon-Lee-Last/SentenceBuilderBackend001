const mongoose = require('mongoose');

const TypesSchema = new mongoose.Schema({
    all_types: {
        type: [String]
    },
    nouns: {
        type: [String]
    },
    verbs: {
        type: [String]
    },
    adjectives: {
        type: [String]
    },
    adverb: { 
        type: [String]
    },
    pronoun: {
        type: [String]
    },
    preposition: {
        type: [String]
    },
    conjunction: {
        type: [String]
    },
    determiner: {
        type: [String]
    },
    exclamation: {
        type: [String]
    }
});

module.exports = Types = mongoose.model('types', TypesSchema);