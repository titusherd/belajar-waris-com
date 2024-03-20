import { createRequire } from "module";
import Controller from "./controllers/index.js";

const require = createRequire(import.meta.url);

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/posts', Controller.midtrans);
app.post('/zoho', Controller.zoho);
app.post('/sheets', Controller.sheets);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});




