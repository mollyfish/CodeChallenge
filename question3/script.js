'use strict';
$(function() {
var library = new Library('Best Library');

function displayLibrary(name) {
  console.log(name.name);
  for (var i = 0; i < name.shelves.length; i++) {
  console.log('Shelf index ' + i + ': ' + name.shelves[i].name);
    for (var j = 0; j < name.shelves[i].contents.length; j++) {
      console.log('Shelf ' + i + ', book ' + j + ': ' + name.shelves[i].contents[j].title + ', by ' + name.shelves[i].contents[j].author);
    };
  };
  console.log('---------------------');
};

library.addShelf('Children');
library.addShelf('Fiction');
library.addShelf('Non-Fiction');
library.addShelf('Art');

library.shelves[0].addBook('Jane Doe', 'See Spot Run');
library.shelves[1].addBook('John Smith', 'Great American Novel');
library.shelves[2].addBook('Joe Public', 'A Biography');

displayLibrary(library);
library.removeShelf(3);
displayLibrary(library);
library.shelves[1].removeBook('A Biography');
displayLibrary(library);

});
