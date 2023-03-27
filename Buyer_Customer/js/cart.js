cartsArray.forEach((ele) => {
  cartDOMElement(ele);
});

let order = document.getElementById("total");

let sum = 0;
cartsArray.forEach((ele) => {
  sum += +ele.price;
});

order.textContent = `$${sum}`;
