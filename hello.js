const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hi Ayyappa');
});

const server = app.listen(8080, () => console.log('Server Ready'));

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Process Terminated')
    })
})

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`)
})

const args = process.argv.slice(2);

console.log('print args::::  '+args)

const oranges = ['orange', 'orange'];
const apples = ['just one applie'];

oranges.forEach(fruit => {
    console.count(fruit)
})

apples.forEach(fruit => {
    console.count(fruit)
})