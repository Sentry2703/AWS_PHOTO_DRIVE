import express from 'express';
import { accounts } from './routes/accounts.js'

const app = express();

const port = 3001;

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

app.get('/accounts', (request, response) => {
response.json(accounts);
});

app.get('/accounts/:id', (request, response) => {
const accountId = Number(request.params.id);
console.log("Getting the accounts")
const getAccount = accounts.find((account) => account.id === accountId);

if (!getAccount) {
    response.status(500).send('Account not found.')
} else {
    response.json(getAccount);
}
});

app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
});