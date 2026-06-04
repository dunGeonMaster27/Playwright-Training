let user1 = {
    'name': 'Naveen',
    'age': 20,
    salary: 12.33,
    isActive: true
}

let user2 = {
    'name': 'Saket',
    'age': 22,
    salary: 37.33,
    isActive: true
}

let user3 = {
    'name': 'Rakesh',
    'age': 24,
    salary: 15.33,
    isActive: true
}


console.log(user1);
console.log(user2);
console.log(user3);

console.log('------------');

user1 = user2
console.log(user1);
console.log(user2);
console.log(user3);

console.log('------------');

user1.age = 25
user2.isActive = false
console.log(user1);
console.log(user2);
console.log(user3);

console.log('------------');

user2 = user3
console.log(user1);
console.log(user2);
console.log(user3);

console.log('------------');

user3 = user1
console.log(user1);
console.log(user2);
console.log(user3);

console.log('------------');




// Garbage Collector picks anything from heap memory only with:
// 1. null reference
// 2. undefined reference
// 3. no reference


