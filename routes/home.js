const express = require('express');
const data = require('../data.json');

const router = express.Router();

/**
 * GET home page.
 */
router.get('/', async function (req, res) {
    res.render('home', {data: data, status: req.query.status});
});

module.exports = router;
