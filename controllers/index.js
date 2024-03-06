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
            isProduction: true,
            serverKey: process.env.SERVER_KEY,
            clientKey: process.env.CLIENT_KEY
        });

        const price = req.body.price;

        const user = req.body;



        const parameter = {
            "transaction_details": {
                "order_id": "test-transaction-123" + Math.round((new Date()).getTime() / 1000),
                "gross_amount": price
            }, "credit_card": {
                "secure": true
            }
        };

        snap.createTransaction(parameter)
            .then((transaction) => {
                // transaction token
                console.log(transaction);
                let transactionToken = transaction.token;
                console.log('transactionToken:', transactionToken);
                console.log(user);
                // res.send(transactionToken);
                res.json({ transactionToken: transactionToken, user });
            })
            .catch((error) => {
                console.log('error:', error);
            });
    }

    static zoho = (req, res) => {
        const apiUrl = "https://flow.zoho.com/839171716/flow/webhook/incoming?zapikey=1001.27f0c2b0e2836c2dde1a6ea74f750e7d.af27c5777413cd30816dd86a7b79507c&isdebug=false";
        const recivedData = req.body;
        console.log('Received post data:', recivedData);

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
}

export default Controller;