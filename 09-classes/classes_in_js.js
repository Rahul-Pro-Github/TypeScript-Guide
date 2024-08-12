class Player {
  #score = 0;
  lives = 3;
  constructor(health) {
    this.health = health
  }
  greet() {
    console.log("Hello ");

  }
}

const p1 = new Player(100)
console.log(p1); //Player { score: 0, lives: 3, health: 100 }
p1.greet();//Hello
console.log(p1.health);//100

p1.score = 30
console.log(p1.score);