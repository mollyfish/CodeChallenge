'use strict';

$(function() {
  $('li').click(function() {
    $(this).next('.details').toggleClass('hidden');
  })
});
