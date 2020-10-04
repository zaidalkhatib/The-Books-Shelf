class Book {
  constructor(authorName, bookName, ISBN) {
    this.authorName = authorName;
    this.bookName = bookName;
    this.ISBN = ISBN;
  }
}
class UI {
  addbook(book) {
    if (book.authorName === "" || book.bookName === "" || book.ISBN === "") {
      return;
    }
    const element = document.createElement("tr");
    element.innerHTML = ` <td>${book.authorName}</td> <td>${book.bookName}</td> <td>${book.ISBN}</td> `;
    document.querySelector("#table").appendChild(element);
    addLocalStroge(book);
  }
  deleteBook() {
    element.removeChild();
  }
}
const ui = new UI();

document.querySelector(".button").addEventListener("click", (e) => {
  var authNa = document.getElementById("author-name").value;
  var bookNa = document.getElementById("book-name").value;
  var ISBN_ = document.getElementById("ISBN").value;
  const book = new Book(authNa, bookNa, ISBN_);
  ui.addbook(book);

  e.preventDefault();
});

document.querySelector("#delete").addEventListener("click", (e) => {
  clearAllBooksFromLocalStorge();
});

function addLocalStroge(book) {
  var books;
  if (localStorage.getItem("books") === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem("books"));
  }
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
}

window.onload = function () {
  getDataFromLocalStorge();
};
function getDataFromLocalStorge() {
  const element = document.createElement("tr");

  if (localStorage.getItem("books") !== null) {
    for (var i of JSON.parse(localStorage.getItem("books"))) {
      console.log(i.authorName);
      const element = document.createElement("tr");
      element.innerHTML = ` <td>${i.authorName}</td> <td>${i.bookName}</td> <td>${i.ISBN}</td> `;
      document.querySelector("#table").appendChild(element);
    }
  }
}
function clearAllBooksFromLocalStorge() {
  const Confirm = confirm("Are You Sure You Want to Clear All Books");
  if (localStorage.getItem("books") !== null && Confirm) {
    localStorage.clear();
    location.reload();
  }
}
