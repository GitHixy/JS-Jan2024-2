import * as helper from './helper.js'
import * as component from "./component.js"


const queryParams = new URLSearchParams(window.location.search);
const asinId = queryParams.get('id');
console.log(asinId);
const url = "https://striveschool-api.herokuapp.com/books"

fetch(url)
.then((res) => res.json())
.then((data) => {
    const books = data;
    const book = books.find(book => book.asin === asinId);
    if (book) {
        component.createFilteredCard(book.img, book.title, book.price)
    } else {
        alert('No book found with ASIN: ' + asinID);
    }
})
.catch((error) => {
    console.error('Error:', error);
});



