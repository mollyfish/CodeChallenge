'use strict';

$(function() {
  $('p').click(function() {
    $('div.details').toggleClass('hidden');
  })
  $('button.edit').click(function() {
    $(this).parent('.item').attr('class','urgent');
  })




var replaceWith = $('<input name="temp" type="text" />'),
    connectWith = $('input[name="hiddenField"]');



$.fn.inlineEdit = function(replaceWith, connectWith) {

    $(this).hover(function() {
        $(this).addClass('hover');
    }, function() {
        $(this).removeClass('hover');
    });

    $(this).click(function() {

        var elem = $(this);

        elem.hide();
        elem.after(replaceWith);
        replaceWith.focus();

        replaceWith.blur(function() {

            if ($(this).val() != "") {
                connectWith.val($(this).val()).change();
                elem.text($(this).val());
            }

            $(this).remove();
            elem.show();
        });
    });
};
$('p#trial').inlineEdit(replaceWith, connectWith);
});