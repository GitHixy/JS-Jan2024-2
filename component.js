export function truncateText(text, maxLength) {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  }

export const createCard = function(imgSrc, credit, description, link, maxDescriptionLength) {

    const card = document.createElement('div');
    card.classList.add('col-6' , 'w-25', 'm-2', 'card-full');

    const cardImg = document.createElement('img');
    cardImg.classList.add('card-img-top', );
    cardImg.setAttribute('src', imgSrc);
    card.appendChild(cardImg);
    
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h4');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = credit;
    cardBody.appendChild(cardTitle);

    const ellipsisDescription = truncateText(description, maxDescriptionLength);

    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = ellipsisDescription;
    cardBody.appendChild(cardText);

    const cardLink = document.createElement('a');
    cardLink.classList.add('btn', 'btn-primary');
    cardLink.setAttribute('href', link);
    cardLink.textContent = 'Learn More';
    cardBody.appendChild(cardLink);

    const addToCart = document.createElement('a');
    cardLink.classList.add('btn', 'btn-primary');
    cardLink.setAttribute('href', link);
    cardLink.textContent = 'Add To Cart';
    cardBody.appendChild(addToCart);

    card.appendChild(cardBody);

    const cardContainer = document.getElementById('card-container');
    cardContainer.appendChild(card);
};