import * as helper from "./helper.js"

export const createCard = function(img, title, price, category, asin) {

    const card = document.createElement('div');
    card.classList.add('col-6' , 'w-25', 'm-4', 'card-full');

    const cardImg = document.createElement('img');
    cardImg.classList.add('card-img-top', );
    cardImg.setAttribute('src', img);
    card.appendChild(cardImg);
    
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h4');
    cardTitle.classList.add('card-title', 'text-truncate', 'ms-2');
    cardTitle.textContent = title;
    cardBody.appendChild(cardTitle);

    const cardText = document.createElement('p');
    cardText.classList.add('card-text', 'ms-2');
    cardText.textContent = '€ ' + price;
    cardBody.appendChild(cardText);

    const cardCategory = document.createElement('p');
    cardCategory.classList.add('card-text', 'ms-2');
    cardCategory.textContent = category;
    cardBody.appendChild(cardCategory);

    const bookDetails = document.createElement('a');
    bookDetails.classList.add('btn', 'btn-primary');
    bookDetails.textContent = 'Book Details';
    bookDetails.setAttribute('href', 'details.html?id=' + asin);
    cardBody.appendChild(bookDetails);


    const addToCart = document.createElement('a');
    addToCart.classList.add('btn', 'btn-primary');
    addToCart.textContent = 'Add To Cart';
    addToCart.addEventListener('click', () => {
      const item = {
          name: title,
          price: price,
          img:img
      };
      helper.addToCart(item);
  });
    cardBody.appendChild(addToCart);

    card.appendChild(cardBody);

    const cardContainer = document.getElementById('card-container');
    cardContainer.appendChild(card);
};

export const createFilteredCard = function(img, title, price) {

  const card = document.createElement('div');
  card.classList.add('col-6' , 'w-25', 'm-2', 'card-full');

  const cardImg = document.createElement('img');
  cardImg.classList.add('card-img-top', );
  cardImg.setAttribute('src', img);
  card.appendChild(cardImg);
  
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const cardTitle = document.createElement('h4');
  cardTitle.classList.add('card-title', 'text-truncate', 'ms-2');
  cardTitle.textContent = title;
  cardBody.appendChild(cardTitle);

  const cardText = document.createElement('p');
  cardText.classList.add('card-text', 'ms-2');
  cardText.textContent = '€ ' + price;
  cardBody.appendChild(cardText);

  card.appendChild(cardBody);

  const cardContainer = document.getElementById('filtered-card-container');
  cardContainer.appendChild(card);
};

