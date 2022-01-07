const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require("./database/database");
const stripe = require("stripe")("sk_test_51K4WXbEDKSp2rDY6sD79c0RA4hQ6MLRmrXa8boEzrYYWBIHTRi9OwWV4gdtNnpPuFRdldXIGKIfV8CaFDWTUakGx00mDvMSIk8")



const app = express();
const port = 3333;

app.use(cors());
app.use(bodyParser.urlencoded())
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());




app.post('/create_user', (req, res) => {

    console.log(req.body);
    var message;
    db.addUserToDB(req.body.name, req.body.email, req.body.password).then((ress) =>{
        // console.log(res)
        message = {
            code : 200,
            desc: 'SUCCESS',
            user: {
                user_id: ress
            }
        }
        res.send(message);
    })
    .catch((error) => {
        // console.log(error);
        message = {
            code : 400,
            desc: 'ER_DUP_ENTRY'
        }
        res.send(message);
    });
});


app.post('/signin', (req, res) => {

    console.log(req.body);
    var message;
    db.validateUser(req.body.email, req.body.password).then((ress) => {
        message = {
            code: 200,
            desc: 'SUCCESS',
            user:{
                user_id: ress
            }
        }        
        res.send(message);
    }).catch((err) => {
        console.log(err)
        if(err == 'WRONG_PASSWORD'){
            message = {
                code: 400,
                desc: "WRONG_PASSWORD"
            }
            res.send(message);
        }else if(err == 'DATABASE_ERROR'){
            message = {
                code: 400,
                desc: 'DATABASE_ERROR'
            }
            res.send(message);
        }else if(err == 'NO_SUCH_USER'){
            message = {
                code: 400,
                desc: 'NO_SUCH_USER'
            }
            res.send(message);
        }
    })
});

app.post('/checkout/create', async(req, res) => {
    const total = req.query.total;
    console.log('payment request received', total);

    const paymentIntet = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    }, ((err, charge) => {
        if(err){
            console.log('error happened');
            return;
        }
        res.status(201).send({
            clientSecret: charge.client_secret
        });
    }));
})

app.post('/saveorder', async(req, res) => {
    console.log(req.body);
    db.addOrder(req.body.product_name, req.body.product_image, req.body.product_price, req.body.user_id, req.body.createdAt, req.body.basket_total).then((result) => {
        res.send('success');
    })
    .catch((err) => {
        res.send('something went wrong');
    })
    
    
})





app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));

