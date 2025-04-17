class Pet {
  constructor() {
    const names = ["뽀삐", "나비", "몽실이", "하루", "초코", "보리", "콩이"];
    this.name = names[Math.floor(Math.random() * names.length)];
    this.age = parseFloat((Math.random() * 3 + 0.5).toFixed(1));
    this.energy = 50;
    this.hunger = 50;
    this.family = "Pet";
  }

  clamp(value) {
    return Math.max(0, Math.min(100, value));
  }

  getInfo() {
    return `이름: ${this.name} / 종류: ${
      this.family
    } / 나이: ${this.age.toFixed(1)}살 / 에너지: ${this.energy} / 배고픔: ${
      this.hunger
    }`;
  }

  eat() {
    this.hunger = this.clamp(this.hunger - 30);
    this.energy = this.clamp(this.energy + 10);
  }

  play() {
    this.energy = this.clamp(this.energy - 20);
    this.hunger = this.clamp(this.hunger + 20);
    this.age = parseFloat((this.age + 0.1).toFixed(1));
  }

  sleep() {
    this.energy = this.clamp(this.energy + 40);
    this.hunger = this.clamp(this.hunger + 10);
  }

  speak() {
    console.log(`${this.name}은(는) 조용히 있습니다.`);
  }
}

class Dog extends Pet {
  constructor() {
    super();
    this.family = "Dog";
  }

  speak() {
    console.log(`[Dog] ${this.name}: 멍멍!`);
  }
}

class Cat extends Pet {
  constructor() {
    super();
    this.family = "Cat";
  }

  speak() {
    console.log(`[Cat] ${this.name}: 야옹!`);
  }
}

class Hamster extends Pet {
  constructor() {
    super();
    this.family = "Hamster";
  }

  speak() {
    console.log(`[Hamster] ${this.name}: 찍찍!`);
  }
}

class PetManager {
  constructor() {
    this.pets = [];
  }

  addPet(pet) {
    this.pets.push(pet);
  }

  simulateDay(day) {
    console.log(`--- Day ${day} ---`);
    this.pets.forEach((pet) => {
      pet.speak();
      const actions = ["eat", "play", "sleep"];
      const action = actions[Math.floor(Math.random() * actions.length)];
      pet[action]();
      console.log(`${pet.name}은(는) ${action}()을 했습니다.`);
      console.log(pet.getInfo());
    });
    console.log("----------------------");
  }

  showAllPets() {
    console.log(":클립보드: 전체 펫 목록");
    this.pets.forEach((pet) => {
      console.log(pet.getInfo());
    });
  }
}

function getRandomPet() {
  const classes = [Dog, Cat, Hamster];
  const PetClass = classes[Math.floor(Math.random() * classes.length)];
  return new PetClass();
}

// 시뮬레이션 시작
const manager = new PetManager();
const petCount = Math.floor(Math.random() * 3) + 3; // 3~5마리

for (let i = 0; i < petCount; i++) {
  manager.addPet(getRandomPet());
}

manager.showAllPets();

const totalDays = Math.floor(Math.random() * 3) + 3; // 3~5일

for (let day = 1; day <= totalDays; day++) {
  manager.simulateDay(day);
}
