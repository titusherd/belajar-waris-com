import 'dotenv/config'
import { createRequire } from "module";
import axios from "axios";
const require = createRequire(import.meta.url);
const midtrans = require('midtrans-client');

class Controller {
    static getData = (req, res) => {
        // res.send('Hello, World!');
        // console.log("EXPRESS");
        const data = req.body;
        console.log('Received post data:', data);
        // console.log('Received post data: TESTTT');
        // res.send('Testtt');
        // Process the post data, save to database, etc.
    }

    static midtrans = (req, res) => {
        const snap = new midtrans.Snap({
            isProduction: false,
            serverKey: process.env.SERVER_KEY,
            clientKey: process.env.CLIENT_KEY
        });
        const price = req.body.price;
        const user = req.body;
        const order_id = req.body.order_id;

        const parameter = {
            "transaction_details": {
                "order_id": order_id + Math.round((new Date()).getTime() / 1000),
                "gross_amount": price
            }, "credit_card": {
                "secure": true
            }
        };

        snap.createTransaction(parameter)
            .then((transaction) => {
                // transaction token
                // console.log(transaction);
                let transactionToken = transaction.token;
                // console.log('transactionToken:', transactionToken);
                // console.log(user);
                // res.send(transactionToken);
                res.json({ transactionToken: transactionToken, user });
            })
            .catch((error) => {
                console.log('error:', error);
            });
    }

    static zoho = (req, res) => {
        const recivedData = req.body;
        console.log('Received post data:', recivedData);
        const apiUrl = recivedData.apiUrl


        axios.post(apiUrl, recivedData)
            .then(res => {
                console.log('Response from external API:', res.data);
                // res.json({ message: 'JSON data received and sent successfully' });
            })
            .catch(error => {
                console.error('Error sending JSON data to external API:', error.message);
                // res.status(500).json({ error: 'Error sending JSON data to external API' });
            });
    }

    static sheets = (req, res) => {
        const recivedData = req.body;
        console.log('Received post data:', recivedData);
    }

}

export default Controller;