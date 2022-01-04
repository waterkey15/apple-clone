const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require("./database/database");



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
            desc: 'SUCCESS'
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
            desc: 'SUCCESS'
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




    // db.addUserToDB(req.body.name, req.body.email, req.body.password).then((ress) =>{
    //     // console.log(res)
    //     message = {
    //         code : 200,
    //         desc: 'SUCCESS'
    //     }
    //     res.send(message);
    // })
    // .catch((error) => {
    //     // console.log(error);
    //     message = {
    //         code : 400,
    //         desc: 'ER_DUP_ENTRY'
    //     }
    //     res.send(message);
    // });
});



app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));

