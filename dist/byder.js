if (byder === undefined) {
  var byder = {};
} else {
  byder = {};
}
byder.getElements = function(elem) {
  return document.querySelectorAll(elem);
}
