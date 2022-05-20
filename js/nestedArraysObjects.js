let book = ['Eloquent JavaScript', 'Secrets of the JavaScript Ninja'];
console.log(book[0]); // => Eloquent JavaScript
console.log(book[1]); // => Secrets of the JavaScript Ninja
console.log(book[6]); // undefined

let eloquentJS = {
    title: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke'
  };
  
  console.log(eloquentJS.title); // => Eloquent JavaScript
  
  let secretsJSninja = {
    title: 'Secrets of the JavaScript Ninja',
    author1: 'John Resig',
    author2: 'Bear Bibeault' // two authors... interesting...
  };
  
  console.log(secretsJSninja.author2); // => Bear Bibeault

  // Nested data structures

// Having all data is not always enough. We have to know how to organize that data so we can use it easily and maintain the state of our data clean and understandable as much as possible.
// 
// Objects in an array (aka array of objects)
// Let’s take a look at our previous examples. The array of books and objects that contain the details about each book are correlated, but they exist as separate variables. We can merge it into just one variable and have an array of objects instead:

const books = [
    {
      title: 'Eloquent JavaScript',
      author: 'Marijn Haverbeke'
    },
    {
      title: 'Secrets of the JavaScript Ninja',
      author1: 'John Resig',
      author2: 'Bear Bibeault'
    }
  ];
  
  // Getting the data from arrays of objects

  console.log(books[0]);
// { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' }
// Since we are working with arrays, we use [index] notation to access the data. Based on the previous console.log(), we can see that we got the whole object back. Well, this is easy - when working with objects, we can just simply use . notation to get the data


console.log(books[0].title);
// Eloquent JavaScript

// Adding/removing the data to/from arrays of objects
// We still can use the same methods we covered in one of the previous lessons:

// .push()
// .unshift()
// .pop()
// .shift()

let jsDesignPatterns = {
    title: 'Learning JavaScript Design Patterns',
    author1: 'Addy Osmani'
  };
  
  books.push(jsDesignPatterns);
  console.log(books);
  
  // [
  //   { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' },
  //   { title: 'Secrets of the JavaScript Ninja',
  //     author1: 'John Resig',
  //     author2: 'Bear Bibeault' },
  //   { title: 'Learning JavaScript Design Patterns',
  //     author1: 'Addy Osmani' }
  // ]
  
 // Arrays in objects
// Again, let’s go and take a look into our previous books array. One of the books has two authors, so it would be logical to place them in the same property that will hold both of them. Well, that means we would have an array of authors instead of two separate properties:

const books = [
    {
      title: 'Eloquent JavaScript',
      author: 'Marijn Haverbeke'
    },
    {
      title: 'Secrets of the JavaScript Ninja',
      authors: ['John Resig', 'Bear Bibeault']
    }
  ];
  
  // And here is how we can access to these values:

  console.log(books[1].authors);
  // [ 'John Resig', 'Bear Bibeault' ]
  
  console.log(books[1].authors[0]); // => John Resig
  console.log(books[1].authors[1]); // => Bear Bibeault

  // At the end of the road, the same rule has been applied all over again:

 //to access the property of the object use . (dot) notation, and
// to access the element of the array, use [index] notation.

// objects in objects

// Another way of organizing data could be to place objects inside objects. Let’s see an example:

let currentGroup = {
  course: 'Web Development',
  type: 'full-time',
  squadName: 'squad-307',
  city: 'Miami',
  teacher: {
    name: 'Nick',
    age: 27
  },
  classroom: {
    floor: 3,
    seats: 30,
    available: true
  }
};

//  As we can see, teacher and classroom are both embedded objects inside currentGroup object. Here is how we can get the values we want:

console.log(currentGroup.teacher); // => { name: 'Nick', age: 27 }
console.log(currentGroup.teacher.name); // => Nick
console.log(currentGroup.classroom.available); // => true

// When having objects nested inside other objects, we use . (dot) notation to access the values.

// Array of arrays (two-dimensional array)
// Sometimes it makes sense to organize the data in such a way, so it represents multiple arrays saved inside just one variable. And the type of that variable is an array as well. Let’s take a look:

const books = [
    ['Eloquent JavaScript', 'Secrets of the JavaScript Ninja'],
    ['Learn Python the hard way', 'Real Python Course'],
    ['Effective Java', 'Java Generics and Collections']
  ];
  
  // In two-dimensional arrays, to reference an element, is to reference an entire (inner) array.

  console.log(books[1]);
  // => [ 'Learn Python the hard way', 'Real Python Course' ]

  // Referencing the second element of the books array, gave us back the whole array with Python books. If we would like to get the elements of this array, we would have to keep using the same notation ([]) since we are still working with an array:

  console.log(books[1][0]); // => Learn Python the hard way
  console.log(books[4]); // => undefined
  
  // 2D arrays with nested objects
// Very often, you will be dealing with some data structures that are beyond the regular level of complexity. This being said, you might run into an array of arrays that contains nested objects with other nested arrays and objects. 

let basic = {
    language: 'JavaScript',
    frameworks: [
      {
        end: 'back',
        list: [
          {
            name: 'ExpressJS',
            released: 2010
          },
          {
            name: 'MeteorJS',
            released: 2012
          }
        ]
      },
      {
        end: 'front',
        list: [
          {
            name: 'ReactJS',
            released: 2013
          },
          {
            name: 'VueJS',
            released: 2014
          }
        ]
      }
    ]
  };
/*
  Let’s destructure a bit:

the variable named basic has a type object, and it has two properties:

language - type of string and
frameworks - type of array

frameworks is an array of objects
each object has two properties:

end - type of string (back, front) and
list - type of array

list has two objects, and each has two properties: one type of string (name) and one type of number (released)

Let’s see how we can access the data:
*/
console.log(basic.frameworks);
// gives us back the ARRAY with TWO OBJECTS
// => [
//      { end: 'back', list: [ [Object], [Object] ] },
//      { end: 'front', list: [ [Object], [Object] ] }
//    ]

// DON'T WORRY BECAUSE OF [Object] syntax, it just represents more complex structure inside. Will be covered later in the course.

// We see that the property list has type array so to access its elements we have to do the following:

console.log(basic.frameworks[1].list[0]);
// => { name: 'ReactJS', released: 2013 }
