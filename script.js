// Promenljive
var cart = [];
var total = 0;

// Funkcija za dodavanje proizvoda u korpu
function addToCart(productId) {
  var product = getProductById(productId);
  cart.push(product);
  total += product.price;
  updateCart();
}

// Funkcija za pronalaženje proizvoda po ID-u
function getProductById(productId) {
  var products = [
    { id: 1, name: 'Rolex DAY‑DATE 36', price: 35000 },
    { id: 2, name: 'Rolex Datejust 41', price: 19995 },
    { id: 3, name: 'Patek Philippe Nautilus', price: 63000 }
  ];
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === productId) {
      return products[i];
    }
  }
  return null;
}

// Funkcija za ažuriranje korpe
function updateCart() {
  var cartItemsElement = document.getElementById('cart-items');
  cartItemsElement.innerHTML = '';

  for (var i = 0; i < cart.length; i++) {
    var cartItem = cart[i];
    var cartItemElement = document.createElement('li');
    cartItemElement.className = 'cart-item';

    var itemInfoElement = document.createElement('div');
    itemInfoElement.className = 'item-info';

    var itemImageElement = document.createElement('img');
    itemImageElement.src = 'images/slika' + cartItem.id + '.png';
    itemImageElement.alt = cartItem.name;

    var itemNameElement = document.createElement('p');
    itemNameElement.textContent = cartItem.name;

    itemInfoElement.appendChild(itemImageElement);
    itemInfoElement.appendChild(itemNameElement);

    var itemPriceElement = document.createElement('p');
    itemPriceElement.textContent = 'Cijena: $' + cartItem.price.toFixed(2);

    cartItemElement.appendChild(itemInfoElement);
    cartItemElement.appendChild(itemPriceElement);

    cartItemsElement.appendChild(cartItemElement);
  }

  var totalElement = document.getElementById('total');
  totalElement.textContent = 'Ukupno: $' + total.toFixed(2);
}

// Funkcija za obradu forme
function submitForm(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  var subscribe = document.getElementById('subscribe').checked;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var country = document.getElementById('country').value;

  // Obrada podataka forme...

  // Resetovanje forme
  document.getElementById('contact-form').reset();
}

// Funkcija za obradu narudžbe
function checkout() {
  // Obrada narudžbe...

  // Resetovanje korpe
  cart = [];
  total = 0;
  updateCart();
}

// Inicijalno ažuriranje korpe
updateCart();
