const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51K4WXbEDKSp2rDY6sD79c0RA4hQ6MLRmrXa8boEzrYYWBIHTRi9OwWV4gdtNnpPuFRdldXIGKIfV8CaFDWTUakGx00mDvMSIk8")


const app = express();

app.use(cors({origin: true}));

app.use(express.json());

app.get('/', (request, response) =>{response.status(200).send('hello sup')
})

app.post('/checkout/create', async(req, res) => {
    const total = req.query.total;
    console.log('payment request received', total);

    const paymentIntet = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });
    res.status(201).send({
        clientSecret: paymentIntet.client_secret
    });
})


exports.api = functions.https.onRequest(app);