// MODULOS
import { hi, hola, pi } from "./modulo.js";
hi();
hola();
console.log(pi);

console.log("Hello World!");
console.log(process.env.USER);

process.on("exit", () => {
    console.log("bye");
});

import { EventEmitter } from "events";
const emisor = new EventEmitter();

emisor.on("disparar", () => {
    console.log("Bang 🔫");
});

emisor.emit("disparar");
emisor.emit("disparar");
emisor.emit("disparar");
emisor.emit("disparar");

// import { readFileSync, readFile } from "fs";

// // Leer un arvhivo de forma síncrona
// const archivo = readFileSync("texto.txt", "utf8");
// console.log(archivo);

// readFile("texto.txt", "utf8", (err, content) => {
//     console.log(content);
// });

import { readFile } from "fs/promises";

async function archivo() {
    const archivo = await readFile("texto.txt", "utf8");
    console.log(archivo);
}

archivo();
