/*var myNumber = 34434,
	myString = "Some string";

	console.log(typeof myNumber);
	console.log(ty peof myString);
	*/

/* БЫЛО
var person = {
		name: "Andru",
		age: 38,
		gender: "male",
		greet: function() {
			console.log("Hi, my name is" + this.name);
		}
	}
		var anotherPerson = {
		name: "Sunny",
		age: 47,
		gender: "female",
		greet: function() {
			console.log("Hi, my name is" + this.name);
		}
	}	var thirdPerson = {
		name: "Anton",
		age: 15,
		gender: "male",
		greet: function() {
			console.log("Hi, my name is" + this.name);
		}
	}	var fourPerson = {
		name: "Maxim",
		age: 26,
		gender: "male",
		greet: function() {
			console.log("Hi, my name is" + this.name);
		}
	}
	*/ 

	// СТАЛО

// Прототип
	var Person = { 
		constructor: function(name, age, gender) {
			this.name = name;
			this.age = age;
			this.gender = gender;
			return this;
		},
		greet: function() {
			console.log("Hi, my name" + this.name);
		}
	};
	//Наследуют его свойства

	var person, anotherPerson, thirdPerson, fourPerson;

	person = Object.create(Person).constructor("Andru", 38, "male");
	anotherPerson = Object.create(Person).constructor("Sunny", 47, "female");
	thirdPerson = Object.create(Person).constructor("Anton", 15, "male");
	fourPerson = Object.create(Person).constructor("Maxim", 26, "male");

	console.log(person.name);
	console.log(anotherPerson.name);
	console.log(thirdPerson.name);
	console.log(fourPerson.name);

	person.greet();
	anotherPerson.greet();
	thirdPerson.greet();
	fourPerson.greet();

console.log(Person.isPrototypeOf(person)); // Проверка на прототип


	var Person1 = { 
		constructor: function(name, age, gender) {
			this.name = name;
			this.age = age;
			this.gender = gender;
			return this;
		},
		greet: function() {
			console.log("Hi, my name" + this.name);
		}
	};
var WebDeveloper = Object.create(Person);
WebDeveloper.constructor = function(name, age, gender, skills) {
	Person.constructor.apply(this, arguments);
	this.skills = skills || [];
	return this;
};

var developer = Object.create(WebDeveloper).constructor("Andry", 26, "male",
 ["html", "css", "js", "sql", "git"]);
 console.log(developer.skills);
 developer.develop();
 console.log(developer.name);
 developer.greet();









































