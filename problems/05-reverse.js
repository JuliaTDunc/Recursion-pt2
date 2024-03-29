/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/
/*
Base case: str.length === 0;
Recursive case: str.length > 0;
Recursive step: return reverse(str.slice(string.length -1 ))

*/ 

function reverse(str) {
  if(str.length === 0) return "";
  if(str.length > 0) {
    return str[str.length-1] + reverse(str.slice(0, str.length-1))
  }
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
