const BookRepository = require('src/Infrastructure/Persistence/InMemoryBookRepository/InMemoryBookRepository');

module.exports = function(data,callback){
    BookRepository.addBook(data,callback);
};
