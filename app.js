// Model -------------------------

const input = document.querySelector("#userinput");
const button = document.querySelector("#button");
const ul = document.querySelector("ul");


// Controller --------------------

function inputLength() {
  return input.value.length;
}

function createItemList() {
  let li = document.createElement("li");
  let deleteBtn = document.createElement("button");
  li.appendChild(document.createTextNode(input.value));
  li.addEventListener('click', crossItem);
  li.appendChild(deleteBtn);
  deleteBtn.innerText = "x";
  deleteBtn.addEventListener('click', deleteItem);
  ul.appendChild(li);
  input.value = '';

  function crossItem() {
    li.classList.toggle("done");
  }
  function deleteItem() {
    li.remove();
  }
}

function addItemByClick() {
  if (inputLength() > 0) {
    createItemList();
  }
}

function addItemByPressEnter(event) {
  if (inputLength() > 0 && event.which == 13) {
    createItemList();
  }
}


// View --------------------------

button.addEventListener("click", addItemByClick);

input.addEventListener("keypress", addItemByPressEnter);