const Book = require('src/Domain/Book');
let books = [
    new Book(1, 'Clean Code', 'Robert C. Martin', 288, 'FINANCIAL TIMES/PRENTICE HALL'),
    new Book(2, 'Building Microservices', 'Sam Newman', 280, 'O\'Reilly Media'),
    new Book(3, 'Pragmatic Programmer, The:From Journeyman to Master', 'Hunt Andrew', 352, 'ADDISON WESLEY LONGMAN INC DIV PEARSON SUITE 300'),
];

module.exports.findBookById = function(id, callback){
    let book = findBook(id);
    if(!book){
        callback(new Error('Book Not Found'), null);
        return;
    }
    callback(null, book);
};

module.exports.findAllBooks = function(callback){
    return callback(null, books);
};

module.exports.addBook = function(data,callback){
    let id = books.length + 1;
    let book = new Book(id,data.name,data.author,data.pages,data.publisher);
    books.push(book);
    return callback(null,book);
}

module.exports.updateBook = function(id,data,callback){
    let book = new Book(id,data.name,data.author,data.pages,data.publisher);
    let index = books.findIndex(x => x.id === id);
    if(index != -1) {
        books[index] = book;
        return callback(null,book);
    }
    return callback(new Error('Book Not Found'),null);
}

module.exports.deleteBook = function(id,callback){
    let index = books.findIndex(x => x.id === id);
    if(index != -1) {
        let book = books[index];
        books.splice(index,1);
        return callback(null,book);
    }
    return callback(new Error('Book Not Found'),null);
}

module.exports.listBook = function(filter,callback) {
    let list = [];
    for(let i = 0; i < books.length;i++) {
        var find = true;
        Object.keys(filter).forEach(function(key) {
            if(books[i][key] != filter[key]) {
                find = false;
            }
        });
        if(find) {
            list.push(books[i]);
        }
    }
    if(list.length === 0) {
        return callback(new Error('Book Not Found'),null);
    }
    callback(null,list);
}


function findBook(bookId)
{
    for(let i = 0; i < books.length; i++){
        if(books[i].getId() === bookId){
            return books[i];
        }
    }
    return null;
}