// 1. DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  console.log('Page loaded!');
  initApp();
});

// 2. Variables and Constants
const appTitle = "My JS App";
let itemCount = 0;
let items = [];

// 3. DOM Elements
const titleEl = document.getElementById('title');
const listEl = document.getElementById('item-list');
const inputEl = document.getElementById('item-input');
const addBtn = document.getElementById('add-btn');
const clearBtn = document.getElementById('clear-btn');

// 4. Initialize App
function initApp() {
  titleEl.textContent = appTitle;
  loadFromStorage();
  renderList();
}

// 5. Event Listeners
addBtn.addEventListener('click', addItem);
clearBtn.addEventListener('click', clearItems);

// 6. Add Item
function addItem() {
  const value = inputEl.value.trim();
  if (value) {
    const item = {
      id: Date.now(),
      text: value
    };
    items.push(item);
    inputEl.value = '';
    saveToStorage();
    renderList();
  }
}

// 7. Clear All Items
function clearItems() {
  if (confirm('Are you sure you want to clear the list?')) {
    items = [];
    saveToStorage();
    renderList();
  }
}

// 8. Render List
function renderList() {
  listEl.innerHTML = '';
  if (items.length === 0) {
    listEl.innerHTML = '<li>No items yet.</li>';
    return;
  }
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.text;
    li.classList.add('item');
    li.dataset.id = item.id;

    // Delete button
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.classList.add('delete-btn');
    delBtn.onclick = () => deleteItem(item.id);

    li.appendChild(delBtn);
    listEl.appendChild(li);
  });
}

// 9. Delete Item
function deleteItem(id) {
  items = items.filter(item => item.id !== id);
  saveToStorage();
  renderList();
}

// 10. Save to Local Storage
function saveToStorage() {
  localStorage.setItem('items', JSON.stringify(items));
}

// 11. Load from Local Storage
function loadFromStorage() {
  const saved = localStorage.getItem('items');
  if (saved) {
    items = JSON.parse(saved);
  }
}

// 12. Utility: Format Date
function formatDate(date) {
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

// 13. Timer Example
let seconds = 0;
const timerEl = document.getElementById('timer');
setInterval(() => {
  seconds++;
  timerEl.textContent = `Seconds passed: ${seconds}`;
}, 1000);

// 14. Fetch API Example
const userList = document.getElementById('user-list');
fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => {
    data.forEach(user => {
      const li = document.createElement('li');
      li.textContent = `${user.name} (${user.email})`;
      userList.appendChild(li);
    });
  })
  .catch(err => console.error('Fetch error:', err));

// 15. Object Example
const user = {
  name: 'Alice',
  age: 25,
  greet: function () {
    return `Hello, my name is ${this.name}`;
  }
};

console.log(user.greet());

// 16. Array Map
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(n => n * n);
console.log('Squared:', squared);

// 17. Array Filter
const even = numbers.filter(n => n % 2 === 0);
console.log('Even numbers:', even);

// 18. Array Reduce
const total = numbers.reduce((acc, cur) => acc + cur, 0);
console.log('Sum:', total);

// 19. Conditional Logic
function getGreeting(hour) {
  if (hour < 12) return "Good morning";
  else if (hour < 18) return "Good afternoon";
  else return "Good evening";
}
console.log(getGreeting(new Date().getHours()));

// 20. Class Example
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes a sound.`;
  }
}
const dog = new Animal("Dog");
console.log(dog.speak());

