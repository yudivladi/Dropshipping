// Отримуємо посилання на елементи DOM
const nameInput = document.getElementById('name');
const priceInput = document.getElementById('price');
const quantityInput = document.getElementById('count');
const addButton = document.querySelector('button[type="button"]:first-of-type');
const deleteButton = document.querySelector('button[type="button"]:last-of-type');
const itemList = document.querySelector('ul');

// Масив для зберігання елементів
let items = [];

// Функція для додавання нового елемента
function addItem() {
  const name = nameInput.value.trim();
  const price = priceInput.value.trim();
  const quantity = quantityInput.value.trim();

  if (name !== '' && price !== '' && quantity !== '') {
    const item = { name, price, quantity };
    items.push(item);
    renderItems();
    clearInputs();
  }
}

// Функція для видалення елемента
function deleteItem(index) {
  items.splice(index, 1);
  renderItems();
}

// Функція для редагування елемента
function editItem(index) {
  const item = items[index];
  const newName = prompt('Enter new name', item.name);
  const newPrice = prompt('Enter new price', item.price);
  const newQuantity = prompt('Enter new quantity', item.quantity);
 
  if (newName !== null && newPrice !== null && newQuantity !== null) {
     item.name = newName.trim();
     item.price = newPrice.trim();
     item.quantity = newQuantity.trim();
     renderItems();
  }
 }
 

// Функція для очищення полів вводу
function clearInputs() {
  nameInput.value = '';
  priceInput.value = '';
  quantityInput.value = '';
}

// Функція для відображення елементів
function renderItems() {
  itemList.innerHTML = '';
 
  items.forEach((item, index) => {
     const totalCost = item.quantity * item.price;
     const li = document.createElement('li');
     li.innerHTML = `
       <div class="flex justify-between p-2 mb-6 border-b border-gray-200">
         <div class="space-x-4">
           <span class="font-bold text-lg mr-2">Name: ${item.name}</span> <!-- Имя -->
           <span class="text-gray-500 mr-2">Price: ${item.price} €</span> <!-- Цена -->
           <span class="text-gray-500 mr-2">Quantity: ${item.quantity}</span> <!-- Количество -->
         </div>
         <div class="flex items-center">
           <span class="text-gray-500 mr-4">Total: ${totalCost.toFixed(2)}</span> <!-- Общая стоимость -->
           <button class=" text-black font-bold mr-2" onclick="editItem(${index})">Edit</button>
           <button class=" text-black font-bold  mr-2" onclick="deleteItem(${index})">Delete</button>
         </div>
       </div>
     `;
     itemList.appendChild(li);
  });
 }
 
 
 
 

// Додаємо обробник події для кнопки "Add"
addButton.addEventListener('click', addItem);

// Додаємо обробник події для кнопки "Delete"
deleteButton.addEventListener('click', () => {
  items = [];
  renderItems();
});