const assert = require("assert");

const capitalizeFirstLetters = () => {
  return "";
};

assert.strictEqual(typeof capitalizeFirstLetters, "function");
assert.strictEqual(capitalizeFirstLetters(""), "");
assert.strictEqual(capitalizeFirstLetters("a"), "A");
assert.strictEqual(capitalizeFirstLetters("coucou"), "Coucou");
assert.strictEqual(
  capitalizeFirstLetters("my name is sylvain"),
  "My Name Is Sylvain"
);
