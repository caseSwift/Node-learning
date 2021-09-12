// console.log(__filename,"razmak ",__dirname);
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;

        
    };
     greet() {
        console.log(`Hello fellow companion  ${this.name} of age   ${this.age}`);
    };
};

module.exports = Person;