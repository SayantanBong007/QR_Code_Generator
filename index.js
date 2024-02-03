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



