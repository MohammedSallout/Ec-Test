const {
  searchFilter,
  categoryFilter,
} = require("../Buyer_Customer/js/pureFunctions");

describe("SearchFilter", () => {
  test("Should return array of matching objects", () => {
    const actual = searchFilter(
      [
        { id: 1, name: "apple" },
        { id: 2, name: "iphone" },
        { id: 3, name: "acer" },
      ],
      "a"
    );
    const expected = [
      { id: 1, name: "apple" },
      { id: 3, name: "acer" },
    ];
    expect(actual).toEqual(expected);
  });
});

describe("Category Filter", () => {
  test("Should return array of matching objects", () => {
    const actual = categoryFilter(
      [
        { id: 1, category: "Mobile" },
        { id: 2, category: "Laptop" },
        { id: 3, category: "Clothes" },
      ],
      "Laptop"
    );
    const expected = [{ id: 2, category: "Laptop" }];
    expect(actual).toEqual(expected);
  });
});
