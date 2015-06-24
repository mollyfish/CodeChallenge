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

// library.addShelf('Children');
// library.addShelf('Fiction');
// library.addShelf('Non-Fiction');
// library.addShelf('Art');

// library.shelves[0].addBook('Jane Doe', 'See Spot Run');
// library.shelves[2].addBook('John Smith', 'Great American Novel');
// library.shelves[2].addBook('Joe Public', 'A Biography');

// displayLibrary(library);
// library.removeShelf(3);
// displayLibrary(library);
// library.shelves[2].removeBook('A Biography');
displayLibrary(library);

$('#library-name').text(library.name);

$('#submit-shelf').on('click', function() {
  var newShelf = $('#add-shelf').val();
  library.addShelf(newShelf);
  displayLibrary(library);
  $('#add-shelf').val('');
});

$('#stacks').on('click', 'button.delete-shelf', function() {
  var shelfId = ($(this).next().attr('id'));
  var arr = shelfId.split('f');
  var toRemove = parseInt(arr[1]);
  library.removeShelf(toRemove);
  $(this).prev('p').remove();
  $(this).next('ul').remove();
  $(this).remove();
  displayLibrary(library);
});

$('#stacks').on('click', 'form button', function(e) {
  e.preventDefault();
  var shelfId = ($(this).parent().prev('ul').attr('id'));
  var arr = shelfId.split('f');
  var shelfNum = parseInt(arr[1]);
  var title = $(this).parent().children('input.title').val();
  var author = $(this).parent().children('input.author').val();
  library.shelves[shelfNum].addBook(author, title);
  $(this).parent().children('input.title').val('');
  $(this).parent().children('input.author').val('');
});
});
