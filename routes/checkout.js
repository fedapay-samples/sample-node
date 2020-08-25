const express = require('express');
const data = require('../data.json');

const router = express.Router();

/**
 * GET the checkout page.
 */
router.get('/:id', function(req, res) {
    res.render('checkout', { data: data[req.params.id] });
});

module.exports = router;
