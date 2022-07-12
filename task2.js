function reverseString(string) {
  let str = string.split("");
  str.reverse();
  str = str.join("");
  return str;
}

module.exports = reverseString;
