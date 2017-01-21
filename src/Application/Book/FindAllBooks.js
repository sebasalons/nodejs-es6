const BookRepository = require('src/Infrastructure/Persistence/InMemoryBookRepository/InMemoryBookRepository');

module.exports = function(callback){
   BookRepository.findAllBooks(callback);
};