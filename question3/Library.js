'use strict';
function Library(name) {
    this.name = name;
    this.shelves = [];
};

Library.prototype.addShelf = function(name, index) {
  var shelfName = name;
  var shelfIndex = this.shelves.length;
  var shelf = new Shelf(shelfName, shelfIndex);
  this.shelves.push(shelf);
  $('#stacks').append('<p>' + shelfName + ':</p><ul id="shelf' + shelfIndex + '"></ul>');
};

Library.prototype.removeShelf = function(index) {
  this.shelves.splice(index, 1);
  $('#shelf' + index).remove();
};
