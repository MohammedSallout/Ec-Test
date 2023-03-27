productsArray = JSON.parse(localStorage.getItem("products")) || [];

productsArray.forEach((ele) => {
  homeDOMElement(ele);
});

cartCount.textContent = cartsArray.length;

let searchInput = document.getElementById("search");

const handelSearch = (e) => {
  let value = e.target.value.toLowerCase();
  homeContainer.innerHTML = "";
  searchFilter(productsArray, value);
};

// Pure Function
const searchFilter = (arr, value) => {
  const matchEle = [];
  arr.forEach((ele) => {
    if (ele.name.toLowerCase().startsWith(value)) {
      matchEle.push(ele);
      homeDOMElement(ele);
    }
  });
  return matchEle;
};

searchInput.addEventListener("keyup", handelSearch);

let selectElement = document.getElementById("category");

const handelSelect = () => {
  let value = selectElement.value;
  homeContainer.innerHTML = "";
  categoryFilter(productsArray, value);
};

// Pure Function
const categoryFilter = (arr, value) => {
  const matchEle = [];
  if (value === "All") {
    arr.forEach((ele) => {
      matchEle.push(ele);
      homeDOMElement(ele);
    });
  } else {
    arr.forEach((ele) => {
      if (ele.category === value) {
        matchEle.push(ele);
        homeDOMElement(ele);
      }
    });
  }
  return matchEle;
};

selectElement.addEventListener("click", handelSelect);
