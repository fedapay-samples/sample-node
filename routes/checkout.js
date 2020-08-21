const express = require('express');
const router = express.Router();
const data = require('../data.json');

/**
 * GET home page.
 */
router.get('/:id', function(req, res, next) {

    if (req.params.id != '') {

        res.render('checkout', { title: 'My Store', data: data[req.params.id] });

    } else {

        next();

    }
  
});

module.exports = router;
