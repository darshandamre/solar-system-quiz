var readlineSync = require("readline-sync");

var score = 0;

const highScores = [
  {
    name: "Darshan",
    score: 5,
  },
  {
    name: "hohenhiem",
    score: 4,
  },
];

const questions = [
  {
    question: "How many moons does Mars have?",
    options: ["zero", "one", "two"],
    answer: "two",
  },
  {
    question: "Which is the largest planet in our solar system?",
    options: ["uranus", "saturn", "jupiter"],
    answer: "jupiter",
  },
  {
    question: "Pluto is classified as _______",
    options: ["planet", "dwarf planet", "asteroid"],
    answer: "dwarf planet",
  },
  {
    question: "Which is the smallest planet in our solar system?",
    options: ["mercury", "venus", "pluto"],
    answer: "mercury",
  },
  {
    question: "Europa is the moon of which planet?",
    options: ["jupiter", "saturn", "uranus"],
    answer: "jupiter",
  },
];

const welcome = () => {
  let userName = readlineSync.question("Enter your name: ");

  console.log(
    `<----- Welcome, ${userName} -----> \nLet's play SOLAR SYSTEM QUIZ`
  );
};

const game = () => {
  questions.forEach((e) => {
    play(e.question, e.options, e.answer);
  });
};

const play = (question, options, answer) => {
  let userAnswer = readlineSync.question(
    `${question}\nYour options are: ${options[0]}, ${options[1]}, ${options[2]} \n`
  );
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    score += 1;
    console.log("right! :)");
  } else {
    console.log("wrong! :(");
  }

  console.log(`current score: ${score} \n-----------------`);
};

const showScores = () => {
  console.log(`YAY! Your SCORE: ${score}`);
  console.log(
    "Check out the high scores, if you should be there ping me and I'll update it"
  );
  highScores.forEach((score) => console.log(`${score.name} : ${score.score}`));
};

welcome();
game();
showScores();
