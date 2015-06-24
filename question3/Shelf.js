'use strict';
function Shelf(name, index) {
    this.name = name;
    this.index = index;
    this.contents = [];
};

Shelf.prototype.addBook = function(author, title, index) {
  var bookIndex = this.contents.length;
  var newBook = new Book(author, title, bookIndex);
  this.contents.push(newBook);
  $('ul#shelf' + this.index).append('<li id="book' + bookIndex + '">' + title + ', by ' + author + '</li><button>Remove ' + title + '</button>');
};

Shelf.prototype.removeBook = function(lookfor) {
  var match = this.contents.filter(function (el) {
    return el.title === lookfor
  });
  var indexToRemove = this.contents.indexOf(match[0]);
  this.contents.splice(indexToRemove, 1);

  $('#book' + indexToRemove).remove();
};
