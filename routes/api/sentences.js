const express = require('express');
const router = express.Router();
const controller = require('../../controllers/sentences.controller');
const { check } = require('express-validator');


// @route     GET api/types
// @desc      Gets all the sentences saved by the user.
// @access    Public
router.get('/', (req, res) => controller.getAllSentences(req, res));

// @route     POST api/types
// @desc      saves the sentence into the database.
// @access    Public
router.post('/', [
    check("sentence", "sentence is required").not().isEmpty()
], (req, res) => controller.saveSentence(req, res));

module.exports = router;