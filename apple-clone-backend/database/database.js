var mysql = require('mysql');
const CryptoJS = require("crypto-js");
var CryptoAES = require('crypto-js/aes');
var CryptoENC = require('crypto-js/enc-utf8');

const configDB = new Promise((resolve, reject) => {

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
    });
    
    con.connect(function(err) {
        if (err) throw err;
        else{
        console.log("Connected!");
        con.query("CREATE DATABASE apple_clone", function (err, result) {
            if(err){
                if(err.code == 'ER_DB_CREATE_EXISTS'){
                    con.changeUser({database : 'apple_clone'}, function(err) {
                        if (err) throw err;
                        });
                    console.log('database already exists');
                    resolve(con)
                    return con;
                }else{
                    throw err
                }
            }
            else{
                console.log("Database created");
                con.changeUser({database : 'apple_clone'}, function(err) {
                    if (err) throw err;
                    });
                con.query("CREATE TABLE user (user_id INT AUTO_INCREMENT, user_name VARCHAR(20), user_email VARCHAR(40) UNIQUE, user_password CHAR(44), PRIMARY KEY(user_id));");
                resolve(con)
                return con;
            }
        });
        }  
    });
})


const addUserToDB = (name, email, password) => {
    return new Promise((resolve, reject) =>{
        var con = configDB.then((res) => {
            res.query(`INSERT INTO user(user_name, user_email, user_password) VALUES('${name}','${email}', '${password}');`, function(err){
                if(err){
                    if(err.code  == 'ER_DUP_ENTRY'){
                        console.log('same mail');
                        reject('ER_DUP_ENTRY')
                    }
                }else{
                    resolve(200)
                }
            })
        })
    })
    
    // console.log('ready to add db');
    // con.query(`INSERT INTO user(user_name, user_email, user_password) VALUES('${name}','${email}', '${password}');`)
}

const validateUser = (email, password) => {
    return new Promise((resolve, reject) =>{
        var con = configDB.then((res) => {
            res.query(`SELECT * FROM  user WHERE user_email='${email}'`, function(err, results){
                if(err){
                    console.log(err)
                    reject('DATABASE_ERROR')
                }else{
                    console.log(results.length);
                    if(results.length == 0){
                        console.log('error')
                        reject('NO_SUCH_USER');
                    }else{      
                        var passwordFromUser = CryptoAES.decrypt(password, '3333');
                        console.log(passwordFromUser.toString(CryptoENC));

                        var passwordFromDatabase = CryptoAES.decrypt(results[0].user_password , '3333');
                        console.log(passwordFromDatabase.toString(CryptoENC));

                    
                        // console.log(decryptedData);
                        if(passwordFromUser.toString(CryptoENC) == passwordFromDatabase.toString(CryptoENC)){
                            console.log('sign in validated');
                            resolve('SUCCESS')
                        }else{
                            reject('WRONG_PASSWORD');
                        }
                    }
                }
            })
        })
    })
}


module.exports = { addUserToDB, validateUser };
