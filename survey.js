const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable: ", (answer1) => {
  rl.question("What's an activity you like doing? ", (answer2) => {
    rl.question("What do you listen to while doing that? ", (answer3) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer4) => {
        rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
          rl.question("Which sport is your absolute favourite? ", (answer6) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer7) => {
              console.log("------------------- Generated Profile ----------------------------");
              console.log(`Hi! My name is: ${answer1}. I love ${answer2}. I listen to ${answer3} while ${answer2}. My favourite meal of the day is ${answer4}. I love eating ${answer5} for ${answer4}. I am a big fan of ${answer6}. My superpower is ${answer7}.`);
              console.log("-----------------------------------------------");
              rl.close();
            });
          });
        });
      });
    });
  });
});