let books = [
    {
        id: 1,
        name:'Clean Code',
        author: 'Robert C. Martin',
        pages: 288,
        publisher: 'FINANCIAL TIMES/PRENTICE HALL',
        description: ''
    },
    {
        id: 2,
        name:'Building Microservices',
        author: 'Sam Newman',
        pages: 280,
        publisher: 'O\'Reilly Media',
        description: "Distributed systems have become more fine-grained in the past 10 years, shifting from code-heavy monolithic applications to smaller, self-contained microservices. But developing these systems brings its own set of headaches. With lots of examples and practical advice, this book takes a holistic view of the topics that system architects and administrators must consider when building, managing, and evolving microservice architectures. Microservice technologies are moving quickly. Author Sam Newman provides you with a firm grounding in the concepts while diving into current solutions for modeling, integrating, testing, deploying, and monitoring your own autonomous services. You’ll follow a fictional company throughout the book to learn how building a microservice architecture affects a single domain."
    }
];

module.exports.findBookById = function(id, callback){
    let _book = null;
    books.forEach(book => {
       if(book.id == id){
           _book = book;
       }
    });

    if(!_book){
        callback(new Error('Book Not Found'), null);
        return;
    }

    callback(null, _book);

};