class Book {

    constructor(id, name, author, pages, publisher)
    {
        this.id = id;
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.publisher = publisher;
    }

    getId()
    {
        return this.id;
    }

    getName()
    {
        return this.name;
    }

    getAuthor()
    {
        return this.author;
    }

    getPage()
    {
        return this.pages;
    }

    getPublisher()
    {
        return this.publisher;
    }
}


module.exports = Book;