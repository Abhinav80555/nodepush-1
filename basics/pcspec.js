const os = require("os");
console.log("Free memory", os.freemem());
console.log("Free memory in GB:", os.freemem() / 1024 / 1024 / 1024);
console.log("Total memory in GB:", os.totalmem() / 1024 / 1024 / 1024);
console.log("Os version:", os.version());
console.log("Os cpus:", os.cpus());
