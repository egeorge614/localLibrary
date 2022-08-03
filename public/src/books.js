function findAuthorById(authors, id) {
  let foundAuthors = authors.find((author) => author.id === id);
  return foundAuthors;
}

function findBookById(books, id) {
  let foundBook = books.find((book) => book.id === id);
  return foundBook;
}

function partitionBooksByBorrowedStatus(books) {
  let dividedStatus = [];
  let returned = [];
  let borrowed =[];
  for (let i = 0; i< books.length; i++){
    
    if (books[i].borrows[0].returned === true){
        returned.push(books[i]);
    }else{
      borrowed.push(books[i]);
    }
    
  }
  dividedStatus.push(borrowed, returned); 
  
  return dividedStatus;
  
}

function getBorrowersForBook(book, accounts) {
  let borrowedBooksResults = [];
  let borrowedBooks = book.borrows.forEach((borrow) => {
    const account = accounts.find((account) => account.id === borrow.id )
    account['returned'] = borrow.returned;
    borrowedBooksResults.push(account);
  });
 return borrowedBooksResults.slice(0,10);
}



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
