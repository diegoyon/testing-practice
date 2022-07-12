function stringLength(string) {
  if (string.length < 1) {
    return "String is less than 1 character long";
  } else if (string.length > 10) {
    return "String is more than 10 characters";
  } else {
    return string.length;
  }
}

module.exports = stringLength;
