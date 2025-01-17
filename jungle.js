class Animal {
  #name;
  #species;
  #energy;

  static remainingAnimals = [];

  constructor(name, species, energy) {
    this.#name = name;
    this.#species = species;
    this.#energy = energy;
    Animal.remainingAnimals.push(this.#name);
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }

  get species() {
    return this.#species;
  }

  set species(newSpecies) {
    this.#species = newSpecies;
  }

  get energy() {
    return this.#energy;
  }

  set energy(newEnergy) {
    this.#energy = newEnergy;
  }

  attack(target, damage = 10) {
    this.#energy -= damage;
    target.#energy -= damage;
    console.log(`${this.#name}'s energy: ${this.#energy}`);
    console.log(`${target.name}'s energy: ${target.#energy}`);

    if (this.#energy <= 0) {
      Animal.remainingAnimals.splice(Animal.remainingAnimals.indexOf(this.#name), 1);
      console.log(`${target.name} wins! ${this.#name} is out of energy.`);
    }

    if (target.#energy <= 0) {
      Animal.remainingAnimals.splice(Animal.remainingAnimals.indexOf(target.name), 1);
      console.log(`${this.#name} wins! ${target.name} is out of energy.`);
    }
  }

  eat(gainingEnergy = 10) {
    console.log(`${this.#name} eats and gains energy!`);
    this.#energy += gainingEnergy;
    console.log(`${this.#name}'s energy: ${this.#energy}`);
  }

}

class Bird extends Animal {
  #canFly;

  constructor(name, species, canFly) {
    super(name, species, 100);
    this.#canFly = canFly;
  }

  get canFly() {
    return this.#canFly;
  }

  set canFly(newCanFly) {
    this.#canFly = newCanFly;
  }

  attack(target) {
    const damage = 20;
    if (this.energy <= 20) {
      console.log(`${this.name} can't attack!`);
    } else {
      console.log(`${this.name} swoops in to attack ${target.name}`);
      super.attack(target, damage);
    }
  }
}

class Mammal extends Animal {
  #furColor;

  constructor(name, species, furColor) {
    super(name, species, 200);
    this.#furColor = furColor;
  }

  get furColor() {
    return this.#furColor;
  }

  set furColor(newFurColor) {
    this.#furColor = newFurColor;
  }

  attack(target) {
    const damage = 50;
    if (this.energy <= 50) {
      console.log(`${this.name} can't attack!`);
    } else {
      console.log(`${this.name} lunges to attack ${target.name}`);
      super.attack(target, damage);
    }
  }

  eat() {
    super.eat(20);
  }
}

class Reptile extends Animal {
  #coldBlooded;

  constructor(name, species, coldBlooded) {
    super(name, species, 100);
    this.#coldBlooded = coldBlooded;
  }

  get coldBlooded() {
    return this.#coldBlooded;
  }

  set coldBlooded(newColdBlooded) {
    this.#coldBlooded = newColdBlooded;
  }

  attack(target) {
    const damage = 30;
    if (this.energy <= 30) {
      console.log(`${this.name} can't attack!`);
    } else {
      console.log(`${this.name} bites to attack ${target.name}`);
      super.attack(target, damage);
    }
  }

  eat() {
    super.eat(15);
  }
}


// DRIVER CODE: Create instances of the subclasses and use their properties and methods. You can modify this to add more attacks and eating actions.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(`Name: ${eagle.name}, Species: ${eagle.species}, Can Fly: ${eagle.canFly}`);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(`Name: ${lion.name}, Species: ${lion.species}, Fur Color: ${lion.furColor}`);

const snake = new Reptile("Snake", "Serpent", true);
console.log(`Name: ${snake.name}, Species: ${snake.species}, Cold-Blooded: ${snake.coldBlooded}`);

// Example attack
console.log("\n--- Attacks ---");
eagle.attack(lion);
lion.attack(snake);
lion.attack(snake);
snake.attack(eagle);
// Display the remaining number of animals with energy
console.log(`Remaining animals with energy: ${Animal.remainingAnimals.length}`);

// Example eating
console.log("\n--- Eating ---");
eagle.eat();
lion.eat();
snake.eat();
