import * as component from "./component.js"

let cartItems = [];

export function displayBooks(books) {
    books.forEach((book) =>{
        component.createCard(book.img, book.title, book.price, book.category, book.asin);
    });
}

export function displayFilteredBooks(books) {
    books.forEach((book) =>{
        component.createFilteredCard(book.img, book.title, book.price, book.category);
    });
}

export function searchBooks(books, query) {
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
    displayFilteredBooks(filteredBooks);
}

export const addToCart = function (item) {
    cartItems.push(item);
    updateCartModal();
    const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
    cartModal.show();
}

export const updateCartModal = function () {
    const cartItemsImg = document.getElementById('cartImg');
    const cartItemsList = document.getElementById('cartItems');
    cartItemsList.innerHTML = '';
  
    cartItems.forEach(item => {
        const img = document.createElement('img')
        img.classList.add('modal-img');
        const p = document.createElement('p');
        p.classList.add('text-truncate');
        img.setAttribute('src', item.img)
        p.textContent = `${item.name} - €${item.price}`;
        cartItemsList.appendChild(img);
        cartItemsList.appendChild(p);
    });
  }
