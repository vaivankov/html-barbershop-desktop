'use strict';

(function () {
  window.showModalWidow = function (evt, modal) {
    evt.preventDefault();
    modal.classList.add('modal-show')
  }
})();