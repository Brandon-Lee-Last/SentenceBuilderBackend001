const express = require('express');
const router = express.Router();
const controller = require('../../controllers/types.controller');
const { check } = require('express-validator');

// @route     GET api/types
// @desc      Gets the parts of speech needed.
// @access    Public
router.get('/', (req, res) => controller.getTypes(req, res));

// @route     POST api/types
// @desc      Posts.
// @access    Public
router.post('/', (req, res) => controller.postTypes(req, res));

// @route     GET api/types/type
// @desc      Gets a spacfic type..
// @access    Public
router.get('/type:type', (req, res) => controller.getType(req, res));

module.exports = router;