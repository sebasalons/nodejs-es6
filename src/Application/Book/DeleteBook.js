const BookRepository = require('src/Infrastructure/Persistence/InMemoryBookRepository/InMemoryBookRepository');

module.exports = function(id,callback){
    var bookId = parseInt(id);
    if(isNaN(bookId)){
        callback(new TypeError('Invalid Argument'), null);
        return;
    }
    BookRepository.deleteBook(bookId,callback);
};
