const os = require("os");

const platforms = {
  win32: `Windows ${process.arch}`,
  darwin: `MacOS ${process.arch}`,
  debian: `Linux ${process.arch}`,
};

const platform = platforms[process.platform];

const model = os.cpus()[0]["model"];

const cores = os.cpus().length;

let usedMem = (os.totalmem() - os.freemem()).toString().split("");
usedMem.reverse();
usedMem.splice(0, 9);
usedMem.reverse();
usedMem = usedMem.join("");

let memory = os.totalmem().toString().split("");
memory.reverse();
memory.splice(0, 9);
memory.reverse();
memory = `${usedMem}/${memory.join("")} GB`;

console.log("Platform:", platform);

console.log("Model:", model);

console.log("Cores:", cores);

console.log("Memory:", memory);
