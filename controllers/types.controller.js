const Types = require('../models/Types');
const { validationResult } = require('express-validator');

function SplitWord(words){
    let newWords = words.split(',').map(word => word.trim());
    return newWords;
}

async function getTypes (req, res) {
    try{
        const types = await Types.find();

        res.send(types);
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({error: err.message});
    }
}

async function getType (req, res) {
    try{
        const type = await Types.findOne().select(`${req.params.type.slice(1, req.params.type.length)}`);
        res.send(type);
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({error: err.message});
    }
}

async function postTypes (req, res) {

    const errors = validationResult(req, res);

    if(!errors.isEmpty()){
        return res.status(500).json({ errors: errors.array() });
    }

    //destructuring request body.
    const {nouns, verbs, adjectives, adverb, pronoun, preposition, conjunction, determiner, exclamation} = req.body;

    const typeFields = [{
        nouns: SplitWord(nouns),
        verbs: SplitWord(verbs),
        adjectives: SplitWord(adjectives),
        adverb: SplitWord(adverb),
        pronoun: SplitWord(pronoun),
        preposition: SplitWord(preposition),
        conjunction: SplitWord(conjunction),
        determiner: SplitWord(determiner),
        exclamation: SplitWord(exclamation)
    }];

    try{
        let types = new Types(typeFields[0]);
        await types.save();
        res.json(types);
    }
    catch(err){
        console.error(err.message);
        res.status(500).json({error: err.message});
    }

    res.send(typeFields);
}
module.exports = { getTypes, postTypes, getType};