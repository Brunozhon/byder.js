var byder = {};
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