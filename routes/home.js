const express = require('express');
const router = express.Router();
const { FedaPay, Transaction } = require('fedapay');
const data = require('../data.json');
const env = require('../config')

/**
 * GET home page.
*/
router.get('/', async function(req, res, next) {

    let status = "";
    /**
     * Check if the parameters status and id are defined then 
     * display by status value an alert in the view
     */
    if(typeof req.query.status !== 'undefined') {

            status = req.query.status;
    }
    res.render('home', { title: 'My Store', data: data, status: status });
});

module.exports = router;
