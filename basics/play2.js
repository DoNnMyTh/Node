const person = {
    name: 'Amit',
    age: 24,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

person.greet();