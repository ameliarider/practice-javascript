// Make a hash to store a person's first name, last name, and email address. Then print each attribute on separate lines.

var person = {
  first_name: "Amelia",
  last_name: "Rider",
  email: "amelia@gmail.com" 
};

console.log(person.first_name);
console.log(person.last_name);
console.log(person.email);

// Make an array of hashes to store the first name and last name for 3 different people. Then print out the first person's info.

people = [
  {first_name: "Amelia", last_name: "Rider"},
  {first_name: "John", last_name: "Smith"},
  {first_name: "Jane", last_name: "Smith"}
];

console.log(people[0]);

// Make an array of hashes to store the title and author for 3 different books. Then print out the third book's author.

books = [
  {title: "Harry Potter", author: "JK Rowling"},
  {title: "The Lord of the Rings", author: "JRR Tolkien"},
  {title: "Percy Jackson", author: "Rick Riordan"}
]

console.log(books[2].author)