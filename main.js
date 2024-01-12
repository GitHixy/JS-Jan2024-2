import * as component from "./component.js"
import * as helper from "./helper.js"



const url = "https://striveschool-api.herokuapp.com/books"
const searchBar = document.getElementById('searchBar');
const searchButton = document.getElementById('searchButton');
searchBar.disabled = true;


fetch(url)
.then((res) => res.json())
.then((data) => {
    const books = data;
    helper.displayBooks(books);

    searchBar.disabled = false;

    searchBar.addEventListener('keyup', (e) => {
        const searchTerm = e.target.value;
        if (searchTerm.length > 3) {
            if (e.key === 'Enter') {
                helper.searchBooks(books, searchTerm);
            }
        }
      });
})
.catch((error) => {
    console.error('Error:', error);
});



