{
  // oop - class
  class Animal {
    // public name: string; //public is modifier
    // public species: string;
    // public sound: string;

    // we can see i have to define twice property type.. we can use parameter property to reduce the repeatations. so we need to add public/private parameter properties before constructor property
    // constructor
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }

    // method (I have to use normal function because in arrow function this keyword is not working)
    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }
  const dog = new Animal("German Shepard", "Dog", "Barking");
  const cat = new Animal("German Cat", "Cat", "Meaw");
  dog.makeSound();
}
