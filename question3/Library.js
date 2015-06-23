'use strict';
function Library(name) {
    this.name = name;
    this.shelves = [];
};

Library.prototype.addShelf = function(name) {
  var shelfName = name || this.shelves.length;
  var shelf = new Shelf(shelfName);
  this.shelves.push(shelf);
};

Library.prototype.removeShelf = function(name) {
  this.shelves.splice(name, 1);
};
