// here we require the figlet and run the code

const figlet = require("figlet");

figlet("SUMIT KUMAR SINGH", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
// if you run this this will print the hello world in the figlet  