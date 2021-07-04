const assert = require("assert");

const capitalizeFirstLetters = (str) => {
  if (str.length === 0) {
    return "";
  } else {
    const arr = str.split(" ");
    const result = [];
    for (let i in arr) {
      result.push(arr[i][0].toUpperCase() + arr[i].slice(1));
    }
    return result.join(" ");
  }
};

assert.strictEqual(typeof capitalizeFirstLetters, "function");
assert.strictEqual(capitalizeFirstLetters(""), "");
assert.strictEqual(capitalizeFirstLetters("a"), "A");
assert.strictEqual(capitalizeFirstLetters("coucou"), "Coucou");
assert.strictEqual(
  capitalizeFirstLetters("my name is sylvain"),
  "My Name Is Sylvain"
);
