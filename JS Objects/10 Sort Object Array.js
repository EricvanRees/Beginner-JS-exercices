/* 10. Sort Object Array

Write a JavaScript program to sort an array of JavaScript objects. */

let library = [ 
  {
      title:  'The Road Ahead',
      author: 'Bill Gates',
      libraryID: 1254
  },
  {
      title: 'Walter Isaacson',
      author: 'Steve Jobs',
      libraryID: 4264
  },
  {
      title: 'Mockingjay: The Final Book of The Hunger Games',
      author: 'Suzanne Collins',
      libraryID: 3245
  }];

// sort by author name (alphabetically):
console.log(library.sort((a, b ) => a.author.localeCompare(b.author)));
// sort by libraryID (ascending):
console.log(library.sort((a, b ) => a.libraryID - b.libraryID));