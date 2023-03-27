let homeContainer = document.getElementById("home-container");
let cartCount = document.querySelector(".cart-counter");
let productsArray = JSON.parse(localStorage.getItem("products"));
let cartsArray = [];
cartsArray = JSON.parse(localStorage.getItem("carts")) || [];

const homeDOMElement = (item) => {
  let product = document.createElement("div");
  product.className = "product";
  product.id = item.id;
  homeContainer.appendChild(product);

  let imageDiv = document.createElement("div");
  imageDiv.className = "image";
  product.appendChild(imageDiv);

  let img = document.createElement("img");
  img.src = item.image;
  imageDiv.appendChild(img);

  let title = document.createElement("h3");
  title.className = "title";
  title.textContent = item.name;
  product.appendChild(title);

  let bottomDiv = document.createElement("div");
  bottomDiv.className = "bottom";
  product.appendChild(bottomDiv);

  let price = document.createElement("span");
  price.className = "price";
  price.textContent = `$${item.price}`;
  bottomDiv.appendChild(price);

  let addCart = document.createElement("i");
  addCart.id = "add-cart";
  addCart.className = "fa-solid fa-cart-plus";
  bottomDiv.appendChild(addCart);

  addCart.addEventListener("click", () => {
    addCart.className = "fa-solid fa-cart-arrow-down";
    addCart.style.color = "green";
    setTimeout(() => {
      addCart.className = "fa-solid fa-cart-plus";
      addCart.style.color = "crimson";
    }, 1000);
  });

  addCart.addEventListener("click", () => {
    let id = product.id;
    objIndex = productsArray.findIndex((obj) => obj.id == id);
    productsArray[objIndex].cart = true;

    localStorage.setItem("products", JSON.stringify(productsArray));
  });

  const handelAddCart = () => {
    productsArray.forEach((ele) => {
      if (ele.cart === true) {
        addToCart(cartsArray, {
          id: Date.now(),
          name: ele.name,
          price: ele.price,
          image: ele.image,
          category: ele.category,
        });
        localStorage.setItem("carts", JSON.stringify(cartsArray));
        ele.cart = false;
        localStorage.setItem("products", JSON.stringify(productsArray));
      }
    });
  };

  // Pure Function
  const addToCart = (arr, obj) => {
    arr.push(obj);
    return arr;
  };

  addCart.addEventListener("click", handelAddCart);

  addCart.addEventListener("click", () => {
    cartCount.textContent = cartsArray.length;
  });
};

const group = document.querySelector(".group");

const cartDOMElement = (product) => {
  let cart = document.createElement("div");
  cart.className = "cart";
  cart.id = product.id;
  group.appendChild(cart);

  let itemDiv = document.createElement("div");
  itemDiv.className = "item";
  cart.appendChild(itemDiv);

  let item = document.createElement("h3");
  item.textContent = "Item";
  itemDiv.appendChild(item);

  let img = document.createElement("img");
  img.src = product.image;
  itemDiv.appendChild(img);

  let h5 = document.createElement("h5");
  h5.textContent = product.name;
  itemDiv.appendChild(h5);

  let priceDiv = document.createElement("div");
  priceDiv.className = "price";
  cart.appendChild(priceDiv);

  let price = document.createElement("h3");
  price.textContent = "Price";
  priceDiv.appendChild(price);

  let priceSpan = document.createElement("span");
  priceSpan.textContent = product.price;
  priceDiv.appendChild(priceSpan);

  let categoryDiv = document.createElement("div");
  categoryDiv.className = "category";
  cart.appendChild(categoryDiv);

  let category = document.createElement("h3");
  category.textContent = "Category";
  categoryDiv.appendChild(category);

  let categorySpan = document.createElement("span");
  categorySpan.textContent = product.category;
  categoryDiv.appendChild(categorySpan);

  let deleteDiv = document.createElement("div");
  deleteDiv.className = "delete";
  cart.appendChild(deleteDiv);

  let del = document.createElement("h3");
  del.textContent = "Delete";
  deleteDiv.appendChild(del);

  let deleteIcon = document.createElement("i");
  deleteIcon.className = "fa-solid fa-trash";
  deleteIcon.id = "delete-cart";
  deleteDiv.appendChild(deleteIcon);

  deleteIcon.addEventListener("click", () => {
    cart.remove();
  });

  const handelDelete = () => {
    let id = cart.id;
    let filteredArray = removeCart(cartsArray, id);
    localStorage.setItem("carts", JSON.stringify(filteredArray));
    location.reload();
  };

  // Pure Function
  const removeCart = (arr, id) => {
    return arr.filter((ele) => ele.id != id);
  };

  deleteIcon.addEventListener("click", handelDelete);
};
