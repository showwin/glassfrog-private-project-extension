'use strict';

$(function () {
  watchProjectModal();
});

function checkToPrivate() {
  if (!$('input#private-to-circle').prop('checked')) {
    $('input#private-to-circle').click()
  };
}

function watchProjectModal () {
  setTimeout(function () {
    checkToPrivate();
    watchProjectModal();
  }, 2000)
}
