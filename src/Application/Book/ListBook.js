const BookRepository = require('src/Infrastructure/Persistence/InMemoryBookRepository/InMemoryBookRepository');

module.exports = function(filter,callback){
    BookRepository.listBook(filter,callback);
};
