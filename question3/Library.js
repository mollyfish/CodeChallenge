'use strict';
function Library(name) {
    this.name = name;
    this.shelves = [];
};

Library.prototype.addShelf = function(name) {
  var shelfName = name || this.shelves.length + 1;
  var shelf = new Shelf(shelfName);
  this.shelves.push(shelf);
};
