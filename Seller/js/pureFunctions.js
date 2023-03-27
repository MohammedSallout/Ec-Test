const addProduct = (arr, obj) => {
  arr.push(obj);
  return arr;
};

const updateProduct = (arr, oldId, newId, name, price, image, category) => {
  objIndex = arr.findIndex((obj) => obj.id == oldId);
  arr[objIndex].id = newId;
  arr[objIndex].name = name;
  arr[objIndex].price = price;
  arr[objIndex].image = image;
  arr[objIndex].category = category;
  return arr;
};

const removeProduct = (arr, id) => {
  return arr.filter((ele) => ele.id != id);
};

module.exports = { addProduct, updateProduct, removeProduct };
