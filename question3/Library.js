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
  $('#stacks').append('<p class="' + shelfName + '">' + shelfName + '</p><button class="delete-shelf">Delete ' + shelfName + '</button><ul id="shelf' + shelfIndex + '"></ul>');
  $('#contribute').append('<form id="' + shelfName + '"><p>Add a book to ' + shelfName + ':</p><input class="title" name="' + shelfName + '-title" id="' + shelfName + '-title" type="text" placeholder="Title"><br><input class="author" name="' + shelfName + '-author" id="' + shelfName + '-author" type="text" placeholder="Author"><br><button class="add-book">Add</button></form>');
};

Library.prototype.removeShelf = function(index) {
  this.shelves.splice(index, 1);
  $('#shelf' + index).remove();
  $(this.shelves).each(function(i) {
    this.index = i;//updates the shelf index so remaining shelves will match with their add book buttons
  })
  
};
