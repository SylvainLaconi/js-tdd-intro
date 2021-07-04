const assert = require("assert");

const capitalizeFirstLetters = (str) => {
  return str.length > 0
    ? str
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ")
    : "";
};

//Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirstLetters, "function");
//Check for empty string
assert.strictEqual(capitalizeFirstLetters(""), "");
//Check for one letter
assert.strictEqual(capitalizeFirstLetters("a"), "A");
//Check for one word
assert.strictEqual(capitalizeFirstLetters("coucou"), "Coucou");
//Check for more than on word
assert.strictEqual(
  capitalizeFirstLetters("my name is sylvain"),
  "My Name Is Sylvain"
);
