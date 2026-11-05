let persons = [{
  name: "alaa",
  age: 53,
  gender: "male", 
  profession: "Engineer"
},
{
  name: "israa",
  age: 23,
  gender: "female", 
  profession: "Engineer"
}];

persons.forEach(element => {
    console.log(element);
});
// for (const element of person) {
//     console.log(element);
// }

for (let i = 0; i < persons.length; i++) {
    const element = persons[i];
    console.log(element);
}
// for (const key in person) {
    
//     const element = person[key];
//     console.log(key);
//     console.log(element);
    
// }


