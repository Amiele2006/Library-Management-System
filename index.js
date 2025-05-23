"use strict";
class Library {
    constructor(books, members) {
        this.books = books;
        this.members = members;
    }
    add_book(book) {
        // Check if the book already exists in the library
        if (this.books.includes(book)) {
            console.log(`Error: ${book.title} is already in the library.`);
        }
        else {
            this.books.push(book);
            console.log(`Added ${book.title} to the library`);
        }
    }
    remove_book(book) {
        //Remove book from library
        const index = this.books.indexOf(book);
        if (index !== -1) {
            this.books.splice(index, 1);
            console.log(`Removed ${book.title} from the library`);
        }
        else {
            console.log(`${book.title} is not in the library.`);
        }
    }
    add_member(member) {
        //Checking if member already exists in he library
        if (this.members.includes(member)) {
            console.log(`Error: ${member.name} is already a member of the library.`);
        }
        else {
            this.members.push(member);
            console.log(`Added ${member.name} to the library`);
        }
    }
    remove_member(member) {
        //Remove member from library
        const index = this.members.indexOf(member);
        if (index !== -1) {
            this.members.splice(index, 1);
            console.log(`Removed ${member.name} from the library`);
        }
        else {
            console.log(`${member.name} is not a member of the library.`);
        }
    }
}
class Member extends Library {
    constructor(name, id, borrowed_books, books, members) {
        super(books, members);
        this.name = name;
        this.id = id;
        this.borrowed_books = borrowed_books;
    }
    borrow_book(book) {
        // Check if the book is available
        if (book.available) {
            this.borrowed_books.push(book);
            book.available = false;
            book.borrow();
        }
        else {
            console.log(`${book.title} is not available.`);
        }
    }
    return_book(book) {
        // Check if the book is borrowed by the member
        const index = this.borrowed_books.indexOf(book);
        if (index !== -1) {
            this.borrowed_books.splice(index, 1);
            book.return_book();
        }
        else {
            console.log(`${book.title} is not borrowed by ${this.name}.`);
        }
    }
}
class Book {
    constructor(title, author, available) {
        this.available = true;
        this.title = title;
        this.author = author;
        this.available = available;
    }
    borrow() {
        if (this.available) {
            this.available = false;
            console.log(`You have borrowed ${this.title}`);
        }
        else {
            console.log(`${this.title} is not available.`);
        }
    }
    return_book() {
        if (!this.available) {
            this.available = true;
            console.log(`${this.title} has been returned`);
        }
    }
    __str__() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Available: ${this.available}`);
    }
}
//Testing
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", true);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", true);
const Member1 = new Member("John Doe", 1, [], [], []);
Member1.add_book(book1);
Member1.remove_book(book1);
Member1.add_member(Member1);
book1.__str__();
book2.__str__();
