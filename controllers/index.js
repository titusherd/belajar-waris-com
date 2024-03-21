import 'dotenv/config'
import { createRequire } from "module";
import axios from "axios";
const require = createRequire(import.meta.url);
const midtrans = require('midtrans-client');
const { google } = require('googleapis');


class Controller {
    static getData = (req, res) => {
        // res.send('Hello, World!');
        // console.log("EXPRESS");
        const data = req.body;
        // console.log('Received post data:', data);
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
        const order_id = req.body.order_id;

        const parameter = {
            "transaction_details": {
                "order_id": order_id + ` ${Math.round((new Date()).getTime() / 1000)}`,
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
        // console.log('Received post data:', recivedData);
        const apiUrl = recivedData.apiUrl


        axios.post(apiUrl, recivedData)
            .then(res => {
                // console.log('Response from external API:', res.data);
                // res.json({ message: 'JSON data received and sent successfully' });
            })
            .catch(error => {
                console.error('Error sending JSON data to external API:', error.message);
                // res.status(500).json({ error: 'Error sending JSON data to external API' });
            });
    }

    static sheets = (req, res) => {
        // console.log("test");
        const recivedData = req.body;
        const firstName = recivedData.firstName;
        const lastName = recivedData.lastName;
        const email = recivedData.email;
        const price = recivedData.price;
        const order_id = recivedData.order_id;
        const date = new Date().toLocaleDateString('en-GB');
        const time = new Date().toLocaleTimeString('en-GB');


        // console.log(recivedData);
        const auth = new google.auth.GoogleAuth({
            keyFile: './google.json',  // Path to your service account key file.
            scopes: ['https://www.googleapis.com/auth/spreadsheets']  // Scope for Google Sheets API.
        });

        async function writeToSheet(values) {
            const sheets = google.sheets({ version: 'v4', auth });  // Creates a Sheets API client instance.
            const spreadsheetId = '1UjbyumySaUiT1d5OxQ3Q7eNAvJHNEJmQ8k6JsPbbeLo';  // The ID of the spreadsheet.
            const range = 'Sheet1!A1';  // The range in the sheet where data will be written.
            const valueInputOption = 'USER_ENTERED';  // How input data should be interpreted.

            const resource = { values };  // The data to be written.

            try {
                const res = await sheets.spreadsheets.values.append({
                    spreadsheetId, range, valueInputOption, resource
                })
                return res;  // Returns the response from the Sheets API.
            } catch (error) {
                console.error('error', error);  // Logs errors.
            }
        }

        // Immediately-invoked function expression (IIFE) to execute the read and write operations.
        (async () => {
            const writer = await writeToSheet([[date, firstName, lastName, email, order_id, price, time]]);
            // console.log(writer);  // Logs the write operation's response.
        })();
    }

}

export default Controller;