function getTotalBooksCount(books) {
  let total = 0;
  for (let i =0; i < books.length; i++){
    total++
  } return total;
}


function sliceByFive(value){
  return value.slice(0,5); 
}

function getTotalAccountsCount(accounts) {
   let total = 0;
  for (let i =0; i < accounts.length; i++){
    total++
  } return total;
}


function getBooksBorrowedCount(books) {
  
  let total = 0;
  for (let i =0; i < books.length; i++){
    if (books[i].borrows[0].returned === false){
      total ++;
    }
  } return total;
}


function getMostCommonGenres(books) {
  let genres = books.map((book) => book.genre);
  let commonGenres = [];
  genres.map((genre) => {
    let index = commonGenres.findIndex((element)=> element.name === genre)
     if (index >= 0){
       commonGenres[index].count += 1
     } else
     { 
    commonGenres.push({name: genre, count: 1});   
     }
  }
)
  let sorted = commonGenres.sort((num1, num2) => (num1.count < num2.count) ? 1 : -1);
  if (sorted.length > 5){
    return sliceByFive(sorted);
  }
  return sorted;

}

 
function getMostPopularBooks(books) {
  //let bookToReturn = {};
  let mostPopularBooks = [];
  let popularBooks = books.forEach((book) => {
  mostPopularBooks.push({name: book.title , count: book.borrows.length})  
  
  });
  
   
  return sliceByFive(mostPopularBooks.sort((book1, book2) => (book1.count < book2.count ? 1 : -1))); 

}

function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
    const authorName = author.name;
    let popularAuthor = {name: `${authorName.first} ${authorName.last}`, count: 0}
    console.log(popularAuthor);
      books.forEach((book)=> {
         if (author.id === book.authorId){
           popularAuthor.count += book.borrows.length;
         }
      })
  result.push(popularAuthor);
  }) 
  return sliceByFive(result.sort((auth1, auth2) => (auth1.count < auth2.count ? 1 : -1))); 
}


module.exports = {
  getTotalBooksCount, sliceByFive,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres, 
  getMostPopularBooks,
  getMostPopularAuthors,
};
