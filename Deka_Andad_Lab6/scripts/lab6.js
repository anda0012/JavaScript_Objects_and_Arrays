//lab6 JavaScript file

    var book1 = {
    author: "William Shakespeare",
    title : "The Tempest",
    genre : "Historical Fiction"
    };

    var book2 = {
    author: "Stephen King",
    title : "The Shining",
    genre : "Horror"
    };

    var book3 = {
    author: "Anne Frank",
    title : "The Diary of Anne Frank",
    genre : "Non-Fiction"
    };

var bookArray = [book1, book2, book3];

alert("Hello. You will be prompted to enter the title, author, and genre of three books you recommend.")

function addBooks() {

  for(var i = 0; i < 3; i++) {
    var title = prompt("Title of Book " + (i+1));
    var author = prompt("Author of Book " + (i+1));
    var genre = prompt("Genre of Book " + (i+1));

    //push prompted inputs into original array
    bookArray.push({
      title,
      author,
      genre
    });

   }//loop closing

}//end of function

//*************************************************/

function displayRecommendations() {

  //display the 3 original books first

  //book 1
  var firstBook = document.createElement("h2");
  var textNode1 = document.createTextNode("Book 1");
  firstBook.appendChild(textNode1);
  var booksList = document.getElementById("bookList");
  booksList.appendChild(firstBook, booksList.childNodes[0]);

  var book1values = document.createElement("li");
  var textNode2 = document.createTextNode(book1.title + ", Written By: "+book1.author +", Genre: "+book1.genre);
  book1values.appendChild(textNode2);
  booksList.appendChild(book1values, booksList.childNodes[1]);

  //book 2
  var secondBook = document.createElement("h2");
  var textNode3 = document.createTextNode("Book 2");
  secondBook.appendChild(textNode3);
  booksList.appendChild(secondBook, booksList.childNodes[2]);

  var book2values = document.createElement("li");
  var textNode4 = document.createTextNode(book2.title + ", Written By: "+book2.author +", Genre: "+book2.genre);
  book2values.appendChild(textNode4);
  booksList.appendChild(book2values, booksList.childNodes[3]);

  //book 3
  var thirdBook = document.createElement("h2");
  var textNode5 = document.createTextNode("Book 3");
  thirdBook.appendChild(textNode5);
  booksList.appendChild(thirdBook, booksList.childNodes[4]);

  var book3values = document.createElement("li");
  var textNode6 = document.createTextNode(book3.title + ", Written By: "+book3.author +", Genre: "+book3.genre);
  book3values.appendChild(textNode6);
  booksList.appendChild(book3values, booksList.childNodes[5]);

///*****Display prompted books****************************/

  //book 4
  var fourthBook = document.createElement("h2");
  var textNode7 = document.createTextNode("Book 4");
  fourthBook.appendChild(textNode7);
  booksList.appendChild(fourthBook, booksList.childNodes[6]);

  var book4values = document.createElement("li");
  var textNode8 = document.createTextNode(bookArray[3].title +", Written By: " + bookArray[3].author + ", Genre: " + bookArray[3].genre);
  book4values.appendChild(textNode8);
  booksList.appendChild(book4values, booksList.childNodes[7]);

  //book 5
  var fifthBook = document.createElement("h2");
  var textNode9 = document.createTextNode("Book 5");
  fifthBook.appendChild(textNode9);
  booksList.appendChild(fifthBook, booksList.childNodes[8]);

  var book5values = document.createElement("li");
  var textNode10 = document.createTextNode(bookArray[4].title +", Written By: " + bookArray[4].author + ", Genre: " + bookArray[4].genre);
  book5values.appendChild(textNode10);
  booksList.appendChild(book5values, booksList.childNodes[9]);

  //book 6
  var sixthBook = document.createElement("h2");
  var textNode11 = document.createTextNode("Book 6");
  sixthBook.appendChild(textNode11);
  booksList.appendChild(sixthBook, booksList.childNodes[10]);

  var book6values = document.createElement("li");
  var textNode12 = document.createTextNode(bookArray[5].title +", Written By: " + bookArray[5].author + ", Genre: " + bookArray[5].genre);
  book6values.appendChild(textNode12);
  booksList.appendChild(book6values, booksList.childNodes[11]);

}//end of function

//call functions:

addBooks();

displayRecommendations();
