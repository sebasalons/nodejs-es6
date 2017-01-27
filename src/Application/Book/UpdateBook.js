const BookRepository = require('src/Infrastructure/Persistence/InMemoryBookRepository/InMemoryBookRepository');

module.exports = function(id,data,callback){
    var bookId = parseInt(id);
    if(isNaN(bookId)){
        callback(new TypeError('Invalid Argument'), null);
        return;
    }
    BookRepository.updateBook(bookId,data,callback);
};

