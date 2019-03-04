'use strict';

$(function () {
  watchProjectModal();
});

function checkToPrivate() {
  $('input#private-to-circle').prop('checked', true);
}

function watchProjectModal () {
  setTimeout(function () {
    checkToPrivate();
    watchProjectModal();
    console.log('checked')
  }, 80)
}
