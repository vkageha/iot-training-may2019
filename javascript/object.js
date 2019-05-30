let location = "Nairobi";
const person = {
  firstName: "Miriam",
  lastName: "Nameless",
  likes: [
    "swimming",
    "dancing",
    "drawing",
    {
      name: "Bunjee Jumping",
      location: "Sagana"
    }
  ],
  age: 20,
  student: true,
  getFullName() {
    return `firstName: ${person.firstName} secondName: ${person.lastName}`;
    // return person.firstName +' '+ person.lastName;
  }
};

console.log(person["firstName"]);
console.log(person.lastName);
console.log(person.getFullName());
console.log(person["likes"][3].name);
