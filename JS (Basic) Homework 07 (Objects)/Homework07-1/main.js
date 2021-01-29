function Animal(name, kind){

    this.name = name;
    this.kind = kind;

    this.checkAvailability = function(){
        return this.kind + " " + this.name +" say, hey bro!";
    };
}

let petName = prompt("Insert your pet name");
let petKind = prompt("Insert your pet kind");

let Animal1 = new Animal(petName, petKind);

console.log(Animal1.checkAvailability());

