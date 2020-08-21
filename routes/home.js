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
    if(typeof req.query.status !== 'undefined' && typeof req.query.id !== 'undefined') {

        /**
         * Set the ApiKey and the environment.
         */
        FedaPay.setApiKey(env.apikeys);
        FedaPay.setEnvironment(env.environment);

        try {

            const transaction = await Transaction.retrieve(req.query.id);

            if (transaction.status == "approved") {

            console.log("Paiement effectué");

            status = "success";

            } else {

                console.log("Paiement échoué");

                status = "failed";
            }
        } catch (error) {

            status = "failed";
        }
    }
    res.render('home', { title: 'My Store', data: data, status: status });
});

module.exports = router;
