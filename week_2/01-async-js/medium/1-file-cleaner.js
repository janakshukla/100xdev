// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

// Use the file `input.txt` for input and output.

// You can use the `fs` module to read and write files.
const fs = require("fs");

fs.readFile('test.txt', (err, data) => {
    if (err) throw err;

    let content = data.toString();
    let cleanedContent = content.replace(/\s+/g, ' ');
    fs.writeFile('test.txt', cleanedContent, (err) => {
        if (err) throw err;
    });

    

   
  });



