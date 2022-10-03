import express from "express";
import bodyParser from "body-parser";

import booksRoutes from "./routes/books.js";
import sendData from "./service/consumeAPI.js";

const app = express();
const PORTA = 7777;

app.use(bodyParser.json());

app.use('/books', booksRoutes);

app.get('/', (req, res) => res.send('Homepage teste!.'));

app.listen(PORTA, () => {
    console.log(`Servidor rodando na porta: http://localhost:${PORTA}`)
    sendData()
});



