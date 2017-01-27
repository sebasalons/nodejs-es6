process.env.NODE_PATH = __dirname + '/..';
require('module').Module._initPaths();
const assert = require('assert');
const BookRepository = require('src/Infrastructure/Persistence/InMemoryBookRepository/InMemoryBookRepository');

describe('Book repository', () => {
    it('can get book by Id', () => {
        BookRepository.findBookById(1, (err, book) =>{
            assert.ifError(err);
            assert.equal('Clean Code', book.getName());
            assert.equal(1, book.getId());
        });
    });

    it('throw Error Book Not Found', () => {
        BookRepository.findBookById(10, (err, book) =>{
            assert.throws(
                function() {
                    throw new Error('Book Not Found');
                },
                Error
            );
        });
    });

    it('can get all books', () => {
        BookRepository.findAllBooks((err, books) =>{
            assert.ifError(err);
            assert.equal(3, books.length);
            assert.equal('Clean Code', books[0].getName());
        });
    });

    it('add book', () => {
        let book = {
            "name": "OReilly.Head.First.Design.Patterns",
            "author": "Eric Freeman",
            "pages": 694,
            "publisher": "O'Reilly Media"
        }

        BookRepository.addBook(book,(err,newBook) => {
            assert.ifError(err);
            assert.equal(book.name,newBook.name);
        });
    });

    it('update book', () => {
        let book = {
            "name": "OReilly.Head.First.Design.Patterns",
            "author": "Eric Freeman",
            "pages": 694,
            "publisher": "O'Reilly Media"
        }

        BookRepository.updateBook(1,book,(err,updateBook) => {
            assert.ifError(err);
            assert.equal(book.name,updateBook.name);
        });
    });

    it('delete book', () => {
       BookRepository.deleteBook(1,(err,deleteBook) => {
           assert.ifError(err);
           assert.equal(1,deleteBook.id);
       });
    });

    it('list book', () => {
        let filter = {
            "id":2,
            "name":"Building Microservices"
        }
        BookRepository.listBook(filter,(err,books) => {
            assert.ifError(err);
            assert.equal(1,books.length);
        });
    });
});