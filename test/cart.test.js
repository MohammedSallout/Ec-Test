const { addToCart, removeCart } = require("../Buyer_Customer/js/pureFunctions");

describe("Testing add new product to cart", () => {
  test("Should return [{id: 0, name: iphone}] when given {id: 0, name: iphone}", () => {
    const actual = addToCart([], { id: 0, name: "iphone" });
    const expected = [{ id: 0, name: "iphone" }];
    expect(actual).toEqual(expected);
  });
});

describe("Testing Remove any product from cart", () => {
  test("Should return [] when given ([{id: 0, name: iphone}], 0)", () => {
    const actual = removeCart([{ id: 0, name: "iphone" }], 0);
    const expected = [];
    expect(actual).toEqual(expected);
  });
});
