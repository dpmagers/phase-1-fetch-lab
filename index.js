document.addEventListener('DOMContentLoaded', ()=>{

fetchBooks()

})

// function fetchBooks(){
// fetch("https://anapioficeandfire.com/api/books")
// .then(res => res.json())
// .then(books => renderBooks(books))
// }
function fetchBooks(){
fetch("https://anapioficeandfire.com/api/books")
.then(res => res.json())
.then(books => renderBooks(books))
}

function renderBooks(books){
  //grab html element 
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.textContent = book.name
    main.append(h2, img)


  })
  //iterate over the array and pull out each book
  //create element for each book
  //append element to the dom 
}

































































































// function fetchBooks() {
//   fetch ("https://anapioficeandfire.com/api/books") 
//     .then(resp => resp.json())
//     .then(json => renderBooks(json))
// }
  
// //json is the parameter of this anonymous function. passed as an argument to renderBooks





// // (https://anapioficeandfire.com/api/books) 
// //   .then ((resp) = resp.json())
// //   .then (json) = > console.log("hello")
// // }

// https://anapioficeandfire.com/api/books

//   // To pass the tests, don't forget to return your fetch!


// // fetch("https://anapioficeandfire.com/api/books")
// //   .then((resp) => resp.json())
// //   .then((json) => console.log(json));


// // fetch("string representing a URL to a data source")
// //   .then(function (response) {
// //     return response.json();
// //   })
// //   .then(function (data) {
// //     // Use the data from the response to do DOM manipulation
// //   });


// function renderBooks(books) {
//   const main = document.querySelector('main');
//   books.forEach(book => {
//     const h2 = document.createElement('h2');
//     h2.innerHTML = book.name;
//     main.appendChild(h2);
//   });
// }



// document.addEventListener('DOMContentLoaded', function() {
//   fetchBooks();
// });
