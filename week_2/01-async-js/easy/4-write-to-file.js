// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
const fs = require("fs");


let data =
  "Learning how to write in a file.Learning how to write in a fileLearning how to write in a fileLearning how to write in a fileLearning how to write in a file.";

fs.writeFile("test.txt", data, (err) => {
  if (err) throw err;
});