const Sentences = require('../models/Sentences');
const { validationResult } = require('express-validator');

async function getAllSentences (req, res) {
    try{
        const sentences = await Sentences.find(); //gets all the sentences

        res.send(sentences); //sends it back.
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({error: err.message});
    }
}

async function saveSentence (req, res){
    try{
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(500).json({errors: errors.array()}); //checks if no errors were thrown.
        }

        //destructure from request body.
        const {
            sentence
        } = req.body;

        let sentences = new Sentences({sentence});

        await sentences.save(); //saves

        res.send("Inserted Successfully");
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({error: err.message});
    }
}

module.exports = { getAllSentences, saveSentence};