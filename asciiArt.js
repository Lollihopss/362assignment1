const figlet = require('figlet');

// Check if a string argument is provided
if (process.argv.length < 3) {
  console.log("Please provide a string argument in quotes.");
} else {
  // Extract the string from the command line arguments
  const userString = process.argv.slice(2).join(' ');

  // Generate ASCII art from the extracted string
  figlet(userString, function(err, data) {
    if (err) {
      console.log("Error:", err);
    } else {
      // Print the ASCII art to the terminal
      console.log(data);
    }
  });
}