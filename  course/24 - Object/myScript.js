// JavaScript Objects 

// way #1 to define and create object using new keyword

/*var person = new Object();
person.firstName = "Russell";
person.lastName = "Brown";
person.height = 5.10;
person.age = 25;
person.fullName = function() {
    
    return (person.firstName + " " + person.lastName);  
}

alert(person.firstName);
alert(person["age"]);
alert(person.fullName());



// way #2 to define and create object using object constructor
// this keyword means, the object itself

function Person(fName, lName, hg, age) {
    
    this.firstName = fName;
    this.lastName = lName;
    this.height = hg;
    this.age = age;
    this.fullName = function() {
        
        return (this.firstName + " " + this.lastName);
    }
}

var myBrother = new Person("Russell", "Brown", 5.10, 25);
var mySister = new Person("Sara", "Brown", 5.11, 18);

alert(myBrother.firstName);
alert(myBrother.fullName());


alert(mySister.firstName);
alert(mySister.fullName());





// way # 3 define and create object using object literal
// this is the easiest way to create JS Objects

var person = { firstName: "Russell", 
               lastName: "Brown", 
               height: 5.7, 
               age: 25, 
               fullName: function() {
                    return this.firstName + " " + this.lastName;
               } 
             };

//alert(person.firstName);
//alert(person.fullName());
//alert(person["age"]);

// object are changeable

var x = person;

x.firstName  = "Johan";

//alert(x.firstName);
//alert(person.firstName);

// delete property

delete person.age;
// delete person["age"];
alert(person.age);





// for in loop 
var person = { firstName: "Russell", lastName: "Brown", height: 5.7, age: 25};

var v = "";
var k;

for (k in person) {
    
    v = v + person[k] + " ";
    
}

alert (v);
*/

// nest an object
var user = { name: "Russell", age: 25,
                size: {
                    top: 90,
                    middle: 60,
                    bottom: 90
                }
}
alert(user.name);
alert(user.size.top);























