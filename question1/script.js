'use strict';

$(function() {
  $('button#add-item').click(function() {
    var elLi = $('<li><span class="edit-me">New Item</span> <button class="remove-item">Remove</button></li>')
    $('#todo-list').append(elLi);
  });

  $('.edit-me').click(function() {
    var el = $(this);
    var elReplace = $('<input name="ghost" type="text" placeholder="' + el.text() + '"/>');
    var connect = $('input[name="ghostField"]');

    el.hide();
    el.after(elReplace);
    elReplace.focus();
    elReplace.blur(function() {
      if ($(this).val() !== '') {
        connect.val($(this).val()).change();
        el.text($(this).val());
      }
      $(this).remove();
      el.show();
    });
  });

  $('button.remove-item').click(function() {
    $(this).parent().remove();
  });

  
});
