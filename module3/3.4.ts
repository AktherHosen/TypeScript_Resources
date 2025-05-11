{
  // typeguard using instance of
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log("I am making sound!");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBurk() {
      console.log("I am barking");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeaw() {
      console.log("I am Meawing");
    }
  }

  // we can handle type of animal using an function
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };
  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBurk();
    } else if (isCat(animal)) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  };
  const dog = new Dog("Dog1", "Dog");
  const cat = new Cat("Cat1", "Cat");
  getAnimal(dog);
  getAnimal(cat);
}
