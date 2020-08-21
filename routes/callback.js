const express = require('express');
const router = express.Router();
const { FedaPay, Transaction } = require('fedapay');
const data = require('../data.json');
const env = require('../config')

/**
 * Callback_URL route.
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

            status = "success";

            } else {

                status = "failed";

            }
        } catch (error) {

            status = "failed";
        }
    }
    res.redirect(`/home?status=${status}`);
});

module.exports = router;
