// Pure Function
const searchFilter = (arr, value) => {
  const matchEle = [];
  arr.forEach((ele) => {
    if (ele.name.toLowerCase().startsWith(value)) {
      matchEle.push(ele);
    }
  });
  return matchEle;
};

// Pure Function
const categoryFilter = (arr, value) => {
  const matchEle = [];
  if (value === "All") {
    arr.forEach((ele) => matchEle.push(ele));
  } else {
    arr.forEach((ele) => {
      if (ele.category === value) {
        matchEle.push(ele);
      }
    });
  }
  return matchEle;
};

// Pure Function
const addToCart = (arr, obj) => {
  arr.push(obj);
  return arr;
};

// Pure Function
const removeCart = (arr, id) => {
  return arr.filter((ele) => ele.id != id);
};

module.exports = { searchFilter, categoryFilter, addToCart, removeCart };
