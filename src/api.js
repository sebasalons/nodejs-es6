const express = require('express');
const api = express.Router();


/**
 * MIDDLEWARES
 */
api.use(function (req, res, next){
    console.log(req.ip, req.method, req.originalUrl);
    next();
});


/**
 *  ENDPOINTS
 */

api.get('/book/:id', function (req, res) {
    let id = req.params.id;
    let FindBookById = require('src/Application/Book/FindBookById');

    FindBookById(id, (err, book) => {
        if(err){
            res.status(404).json(err.message);
            return;
        }
        res.json(book);
    });
});

api.get('/book', function(req, res){
    let FindAllBooks = require('src/Application/Book/FindAllBooks');
    FindAllBooks((err, books) => {
        if(err){
            res.status(404).json(err.message);
            return;
        }
        res.json(books);
    })
});

module.exports = api;
