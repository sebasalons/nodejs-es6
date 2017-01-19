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
        BookRepository.findBooks((err, books) =>{
            assert.ifError(err);
            assert.equal(3, books.length);
            assert.equal('Clean Code', books[0].getName());
        });
    });
});