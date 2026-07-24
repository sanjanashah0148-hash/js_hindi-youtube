function createUser(username, score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function () {
    this.score++;
}

createUser.prototype.printMe = function () {
    console.log(`score is ${this.score}`);
}

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

chai.printMe();
tea.printMe();

/*
here's what happens behind the scenes when the new keyboard is used:
A new object is created:The new keyword initiates the creation of a new Javascript object.

A prototype is linked:the newly craeted object gets linked to the prototype
of the constructor function.This means it has access to properties and methods defined
on the constructor's prototype.
the constructor is called:The constructor function is called with thr specified arguments and this is bound to the newly created
object.If no explicit return value is specified from the contructor.java script assumes this.

the constructor function is called:The constructor function is called with the specified arguments
and this is bound ot the newly created abject.If no explicit return value is specified from the constructor,javascript assumes this,the newly craeted
abject,to be the intended return value.

the new object is returned:After the cinstructior function has been
called,if it doesnt return a non-primitive value(object,array,function,etc),
the newly created object is returned.

 */