let productId = document.getElementById("id-no");
let productName = document.getElementById("name");
let productPrice = document.getElementById("price");
let productImg = document.getElementById("img");
let productCategory = document.getElementById("category");

let productSubmit = document.getElementById("submit-product");
let productSave = document.getElementById("save-product");
let editProduct = document.getElementById("edit-product");

let productsArray = [];
productsArray = JSON.parse(localStorage.getItem("products")) || [];

const addNewProduct = () => {
  addProduct(productsArray, {
    id: Date.now(),
    name: productName.value,
    price: productPrice.value,
    image: productImg.value,
    category: productCategory.value,
    cart: false,
  });

  localStorage.setItem("products", JSON.stringify(productsArray));
};

// Pure Function
const addProduct = (arr, obj) => {
  arr.push(obj);
  return arr;
};

const getValue = (e) => {
  let id = e.target.parentElement.parentElement.id;
  productsArray.forEach((ele) => {
    if (ele.id == id) {
      productId.value = ele.id;
      productName.value = ele.name;
      productPrice.value = ele.price;
      productImg.value = ele.image;
      productCategory.value = ele.category;
    }
  });
};

const editAnyProduct = (e) => {
  let id = productId.value;

  updateProduct(
    productsArray,
    id,
    Date.now(),
    productName.value,
    productPrice.value,
    productImg.value,
    productCategory.value
  );

  localStorage.setItem("products", JSON.stringify(productsArray));
};

// Pure Function
const updateProduct = (arr, oldId, newId, name, price, image, category) => {
  objIndex = arr.findIndex((obj) => obj.id == oldId);
  arr[objIndex].id = newId;
  arr[objIndex].name = name;
  arr[objIndex].price = price;
  arr[objIndex].image = image;
  arr[objIndex].category = category;
  return arr;
};

const delEle = (e) => {
  e.target.parentElement.parentElement.remove();
  let id = e.target.parentElement.parentElement.id;
  let filteredArray = removeProduct(productsArray, id);
  localStorage.setItem("products", JSON.stringify(filteredArray));
  location.reload();
};

// Pure Function
const removeProduct = (arr, id) => {
  return arr.filter((ele) => ele.id != id);
};

productSubmit.addEventListener("click", addNewProduct);
productSave.addEventListener("click", editAnyProduct);

productsArray.forEach((ele) => {
  sellerDOMElement(ele);
});

/* Start popup */
let addBtn = document.getElementById("add-product");
let popup = document.querySelector(".popup");
let submitProduct = document.getElementById("submit-product");
let overlay = document.getElementById("overlay");

addBtn.addEventListener("click", showPopup);

function showPopup() {
  popup.style.display = "block";
  overlay.className = "overlay";
  productName.value = "";
  productPrice.value = "";
  productImg.value = "";
  productCategory.value = "Mobile";
}

submitProduct.addEventListener("click", closePopup);
overlay.addEventListener("click", closeOverlay);

function closePopup() {
  closeOverlay();
}

function closeOverlay() {
  popup.style.display = "none";
  overlay.removeAttribute("class");
}
/* End popup */
