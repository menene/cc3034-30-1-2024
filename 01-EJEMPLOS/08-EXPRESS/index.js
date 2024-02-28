import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
console.log(__filename)
const __dirname = dirname(__filename);
console.log(__dirname)

const app = express();
const port = 3000;

app.use(express.static(join(__dirname, "public")));

app.get("/", (request, response) => {
    // response.json({ message: "Hello, world!" });
    response.sendFile(join(__dirname, "public", "index.html"));
});

app.listen(port, () => console.log(`corriendo en el ${port}`));