const express = require('express');
const router = express.Router();
const env = require('../config');
const data = require('../data.json');

/**
 * GET the checkout page.
 */
router.get('/:id', function(req, res, next) {

    if (req.params.id != '') {

        res.render('checkout', { title: env.projectName, data: data[req.params.id] });

    } else {

        next();

    }
  
});

module.exports = router;
