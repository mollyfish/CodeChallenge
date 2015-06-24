'use strict';
function Library(name) {
    this.name = name;
    this.shelves = [];
};

Library.prototype.addShelf = function(name) {
  var shelfName = name;
  var shelfIndex = this.shelves.length;
  var shelf = new Shelf(shelfName, shelfIndex);
  this.shelves.push(shelf);
  $('#stacks').append('<p>' + shelfName + ':</p><button class="delete-shelf">Delete ' + shelfName + '</button><ul id="shelf' + shelfIndex + '"></ul><form><p>Add a book to ' + shelfName + ':</p><input class="title" name="' + shelfName + '-title" id="' + shelfName + '-title" type="text" placeholder="Title"><br><input class="author" name="' + shelfName + '-author" id="' + shelfName + '-author" type="text" placeholder="Author"><br><button class="add-book">Add</button></form>');
};

Library.prototype.removeShelf = function(index) {
  this.shelves.splice(index, 1);
  $('#shelf' + index).remove();
};
