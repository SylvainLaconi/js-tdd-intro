const assert = require("assert");

const capitalizeFirstLetters = (str) => {
  return str.length > 0
    ? str
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ")
    : "";
};

assert.strictEqual(typeof capitalizeFirstLetters, "function");
assert.strictEqual(capitalizeFirstLetters(""), "");
assert.strictEqual(capitalizeFirstLetters("a"), "A");
assert.strictEqual(capitalizeFirstLetters("coucou"), "Coucou");
assert.strictEqual(
  capitalizeFirstLetters("my name is sylvain"),
  "My Name Is Sylvain"
);
