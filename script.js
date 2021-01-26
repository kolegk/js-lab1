"use strict";

const fullName = "Greg Kolioupoulos";
let age = 24;
let birtday = "December 13";
let detroitGC = true;
let lifeEvents = [
  "I was born in Redford MI",
  "I went to Wester Michigan University",
  "I played semi-pro roller hockey",
  "I am a manager at Pf Changs",
];

if (detroitGC) {
  console.log(
    `My name is ${fullName} and I am a student at Grand Circus in Detroit, Michigan.I am currently ${age} years old and my birthday is on ${birtday}`
  );
} else {
  console.log(
    `My name is ${fullName} and I am not student at Grand Circus in Detroit, Michigan.`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
while (true) {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  if (randomNumber !== 5) {
    console.log(`${randomNumber} !==5`);
    counter++;
  } else {
    counter++;
    console.log(
      `${randomNumber} ===5.It took ${counter} iterations to randomly generate the number 5`
    );
    break;
  }
}
