export function selectBook(book){
  // console.log("The current book is selected is : "+book.title);
  return {
    type: "BOOK_SELECTED",
    payload:book
  }
}
