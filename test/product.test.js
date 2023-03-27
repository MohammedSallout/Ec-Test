const { addProduct, updateProduct, removeProduct } = require("../Seller/js/pureFunctions");

describe("Testing add new product", () => {
  test("Should return [{id: 0, name: iphone}] when given {id: 0, name: iphone}", () => {
    const actual = addProduct([], {id: 0, name: "iphone"});
    const expected = [{id: 0, name: "iphone"}];
    expect(actual).toEqual(expected);
  });
});


describe("Testing edit any product", () => {
  test("Should return [{id: 1, name: acer}] when given ([{id: 0, name: hp}], 0, 1, acer)", () => {
    const actual = updateProduct([{id: 0, name: "hp"}], 0, 1, "acer");
    const expected = [{id: 1, name: "acer"}];
    expect(actual).toEqual(expected);
  });
});

describe("Testing Remove any product", () => {
  test("Should return [] when given ([{id: 0, name: iphone}], 0)", () => {
    const actual = removeProduct([{id: 0, name: "iphone"}], 0);
    const expected = [];
    expect(actual).toEqual(expected);
  });
});