const express = require('express')
const bc = require('./controllers/booksController')
const app = express();

app.use(express.json())

const port = 4000;

app.get('/api/books', bc.read)
app.post('/api/books', bc.create)
app.put('/api/books/:id', bc.update)
app.delete('/api/books/:id', bc.delete)

app.listen(port, () => console.log(`server running on port ${port}`))