// This is a constructor function example - ES5 classes
function Person(firstName, lastName, dob) {
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)
    this.getBirthYear = function() {
        return this.dob.getFullYear()
    }
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear()
}

// Objects are instantiated here - ES5 classes
const Person1 = new Person('Favorite','Person','11-14-1957');
const Person2 = new Person('Yan','Tang','11-19-1942');

console.log(Person1.getBirthYear);
console.log(Person2.getFullName);

