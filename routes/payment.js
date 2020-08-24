const express = require('express');
const { FedaPay, Transaction } = require('fedapay');
const env = require('../config');

const router = express.Router();

/**
 * Get data from form and create a transaction before redirect
 * to the fedapay secured interface for payment.
 */
router.post('/', async function(req, res) {

    /**
     * Set the ApiKey and the environment.
     */
    FedaPay.setApiKey(env.apiKey);
    FedaPay.setEnvironment(env.environment);

    const data = req.body;
    const transaction = await Transaction.create({
        description: 'Achat de vêtements',
        amount: data.amount,
        callback_url: `http://${req.hostname}:${req.socket.localPort}/callback`,
        currency: {
            iso: 'XOF'
        },
        customer: {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            phone_number: {
                number: data.number,
                country: 'BJ'
            }
        }
    });

    const token = await transaction.generateToken();

    res.redirect(token.url);
});

module.exports = router;
