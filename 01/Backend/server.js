// const express = require('express')
import express from "express";

const app = express();

// app.get('/', (req, res) => {
//     res.send('server is ready');
// });

// get a list of 5 jokes in object form
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id:1,
            title:'first joke',
            content:"this is the first joke"
        },
        {
            id: 2,
            title : 'second joke',
            content :"this is second joke"
        },
        {
                id:3,
                title:'third joke ',
                content:' this is third joke'
        }
    ];
    res.send(jokes);
})

const port = process.env.Port || 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

