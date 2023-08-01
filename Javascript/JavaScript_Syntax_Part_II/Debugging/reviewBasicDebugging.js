function isStringPerfectLength(string, minLength, maxLength) {
  const stringLength = string.length;
  
  if (stringLength > maxLength) {
    //console.log("hit");
    return false;
  } else if (stringLength < minLength) {
    	//console.log("hit 2");
	return false;
  } else {
    return true;
  }
}
// 1
// Should return true
console.log("isStringPerfectLength('Dog', 2, 4) returns: " + isStringPerfectLength('Dog', 2, 4));
// 1
// Should return false
console.log("isStringPerfectLength('Mouse', 2, 4) returns: " + isStringPerfectLength('Mouse', 2, 4));
// 2
// Should return false
console.log("isStringPerfectLength('Cat', 4, 9) returns: " + isStringPerfectLength('Cat', 4, 9));
