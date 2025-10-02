/* 4. Display Reading Status

Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. */

const library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

const readingStatus = library.map(el => {
    return el.readingStatus? `already read \'${el.title}\'` : `you still need to read \'${el.title}\'`;  
});

// logs ["already read 'The Road Ahead'", "already read 'Walter Isaacson'", "you still need to read 'Mockingjay: The Final Book of The Hunger Games'"]
console.log(readingStatus);

