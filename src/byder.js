var byder = {};
byder.$ = {};
byder.add = function(add, add2, ex, divbyex) {
  if (ex) {
    if (divbyex == true) {
      return ((add + add2) * ex) / ex;
    } else {
      return (add + add2) * ex;
    }
  } else {
    return add + add2;
  }
}
byder.$.ready = function(elem, _do) {
  elem.onload = _do;
}
byder.$.select = function(id) {
  return document.querySelectorAll(id);
}
byder.$.noconfilct = function(func) {
  var $ = byder;
  func()
}
var $ = byder;
