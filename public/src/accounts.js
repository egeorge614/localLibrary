function findAccountById(accounts, id) {
  let foundAccount = accounts.find((account) => account.id === id);
  return foundAccount;
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1: -1)); 
  //name.last
}

function getTotalNumberOfBorrows(account, books) {
  let counter = 0;
  for (let i = 0; i < books.length; i++) {
    
    for (let j = 0; j < books[i].borrows.length; j++) {
      if (books[i].borrows[j].id === account.id) {
        counter++;
      }
    }
  }
  return counter;
  //for (let i = 0; i < account.length; i++) {
  //  if (account[i].id == books.borrows.id) {
  //    counter ++;
  //  }
  //}
  //return counter;
}

function getBooksPossessedByAccount(account, books, authors) {
  
 // return books.filter((book) => book.borrows[0].returned === false || book.borrows[0].id === account.id);
  
  
 let possessedBooks = [];
  for (let i = 0; i < books.length; i++) {
    if (books[i].borrows[0].returned === false && books[i].borrows[0].id === account.id ) {
      possessedBooks.push(books[i]);
    }
   }
  
  for(let j=0; j < possessedBooks.length; j++){
    let booksAuthor = authors.find((author)=>author.id === possessedBooks[j].authorId);
    possessedBooks[j]['author'] = booksAuthor;
  }
  console.log(possessedBooks);
  return possessedBooks;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
