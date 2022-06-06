const fs = require("fs");
// const quote = "every one missing something or someone";

// fs.writeFile("./awesome.html", quote, (err) => {
//   console.log("completed writing!!");
// });

// const quote2 = "live more,worry less";

// for (let i = 1; i <= 10; i++) {
//   fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//     console.log("completed writing!!");
//   });
// }

// const quote3 = "kadanthu pogum";
// console.log(process.argv);
// const noofFiles = process.argv[2];
// for (let i = 1; i <= noofFiles; i++) {
//   fs.writeFile(`./backup/text-${i}.html`, quote3, (err) => {
//     console.log("completed writing!!", `text-${i}.html`);
//   });
// }

// fs.readFile("./cool.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log("💥something went wrong", err);
//   } else {
//     console.log(data);
//   }
// });
// const quote3 = "\nshoot the kuruvi";
// fs.appendFile("./append.txt", quote3, (err) => {
//   console.log("Update file !!");
// });

fs.unlink("./delete.css", (err) => {
  if (err) {
    console.log("file does not exit");
  } else {
    console.log("file delete!!");
  }
});
