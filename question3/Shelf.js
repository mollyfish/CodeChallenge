'use strict';
function Shelf(name) {
    this.name = name;
    this.contents = [];
};

Shelf.prototype.addBook = function(author, title, shelf) {
  var newBook = new Book(author, title, shelf);
  this.contents.push(newBook);
};