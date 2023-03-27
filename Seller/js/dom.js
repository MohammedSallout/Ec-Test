const group = document.querySelector(".group");

const sellerDOMElement = (product) => {
  let seller = document.createElement("div");
  seller.className = "seller-content";
  seller.id = product.id;
  group.appendChild(seller);

  let itemDiv = document.createElement("div");
  itemDiv.className = "item";
  seller.appendChild(itemDiv);

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
  seller.appendChild(priceDiv);

  let price = document.createElement("h3");
  price.textContent = "Price";
  priceDiv.appendChild(price);

  let priceSpan = document.createElement("span");
  priceSpan.textContent = `$${product.price}`;
  priceDiv.appendChild(priceSpan);

  let categoryDiv = document.createElement("div");
  categoryDiv.className = "category";
  seller.appendChild(categoryDiv);

  let category = document.createElement("h3");
  category.textContent = "Category";
  categoryDiv.appendChild(category);

  let categorySpan = document.createElement("span");
  categorySpan.textContent = product.category;
  categoryDiv.appendChild(categorySpan);

  let actionDiv = document.createElement("div");
  actionDiv.className = "action";
  seller.appendChild(actionDiv);

  let action = document.createElement("h3");
  action.textContent = "Action";
  actionDiv.appendChild(action);

  let editIcon = document.createElement("i");
  editIcon.className = "fa-solid fa-pen-to-square";
  editIcon.id = "edit-product";
  actionDiv.appendChild(editIcon);

  editIcon.addEventListener("click", showPopup);
  editIcon.addEventListener("click", getValue);
  editIcon.addEventListener("click", () => {
    productSubmit.setAttribute("hidden", "hidden");
    productSave.removeAttribute("hidden");
  });

  let deleteIcon = document.createElement("i");
  deleteIcon.className = "fa-solid fa-trash";
  deleteIcon.id = "delete-product";
  actionDiv.appendChild(deleteIcon);

  deleteIcon.addEventListener("click", delEle);
};
