'use strict';
function Shelf(name) {
    this.name = name;
    this.contents = [];
};

Shelf.prototype.addBook = function(author, title) {
  var newBook = new Book(author, title);
  this.contents.push(newBook);
};

Shelf.prototype.removeBook = function(lookfor) {
  var match = this.contents.filter(function (el) {
    return el.title === lookfor
  });
  var indexToRemove = this.contents.indexOf(match[0]);
  this.contents.splice(indexToRemove, 1);
};
