// Check if a string argument is provided
if (process.argv.length < 3) {
    console.log("Please provide a string argument in quotes.");
  } else {
    // Extract the string from the command line arguments
    const userString = process.argv.slice(2).join(' ');
  
    // Print the extracted string to the terminal
    console.log(userString);
  }