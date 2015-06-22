'use strict';
$(function() {
var library = new Library('Best Library');

library.addShelf();
library.addShelf('History');

library.shelves[0].addBook('Jane', 'See Spot Run');
library.shelves[1].addBook('John', 'Great American Novel');

for (var i = 0; i < library.shelves.length; i++) {
  console.log(library.shelves[i].name);
  console.log(library.shelves[i].contents);
  for (var j = 0; j < library.shelves[i].contents.length; j++) {
    console.log(library.shelves[i].contents[j].bookTitle + ', by ' + library.shelves[i].contents[j].author);
  };
};

});