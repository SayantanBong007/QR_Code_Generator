import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

// Use inquirer to get user input
inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter the text or URL",
    },
  ])
  .then((answers) => {
    const text = answers.text;

    // Create QR code image
    var qr_svg = qr.image(text, { type: "png" });
    qr_svg.pipe(fs.createWriteStream("qr_image.png"));

    //  saving user input to a txt file
    fs.writeFileSync("user_input.txt", text);

  })
  .catch((error) => {
    console.error(error);
  });



/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
