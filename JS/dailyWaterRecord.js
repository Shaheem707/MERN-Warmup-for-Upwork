const fs = require("fs");
const filePath = "./dailyWaterRecord.js";
const date = new Date();
// console.log(date);

let glassesOfWater = 9;
console.log(
  glassesOfWater == 0
    ? "\nYou've literally drank no water today, Your kidneys are shouting!!!\n"
    : `\nYou've drank ${glassesOfWater} glasses of water up until now today!\n`
);
process.stdout.write(
  "Did you drink a glass of water? \n(Please reply in y/n.)\n"
);
process.stdin.on("data", (data) => {
  const input = data.toString().trim();

  if (input.toLowerCase() == "y") {
    process.stdout.write("How many glasses did you drink?\n");
    process.stdin.on("data", (num) => {
      const number = parseInt(num.toString().trim());
      if (isNaN(number)) {
        console.log("Data you entered is not a valid Number!!!");
      } else {
        glassesOfWater += number;
        fs.readFile(filePath, "utf8", (err, data) => {
          if (err) {
            console.error("Error reading file:", err);
            // process.exit(); // Exit on error
          }

          // Replace the line with the new value
          const updatedData = data.replace(
            /let glassesOfWater = \d+;/,
            `let glassesOfWater = ${glassesOfWater};`
          );
          console.log(`Total glasses you've drank today: ${glassesOfWater}`);

          // Write the updated content back to the file
          fs.writeFile(filePath, updatedData, "utf8", (err) => {
            if (err) {
              console.error("Error writing to file:", err);
              //   process.exit(); // Exit on error
            }
            console.log("File updated successfully!");
            process.exit();
          });
        });
      }
    });
  }
  //   else {
  //     process.exit();
  //   }
});
// process.stdin.on("data", (data) => {
//   console.log("You entered: ", data.toString());
//   process.exit();
// });
//  ---------------------------------------------------------------
