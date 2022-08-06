import express from 'express';

const app = express();const port = process.env.PORT || 5050;

app.get('/', (req, res) => {
    res.send('<h1>Der Die oder Das</h1>')
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});