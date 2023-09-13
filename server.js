// import http from "http";
import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Servidor escutando!")
}); //está ouvindo as conexões que ocorrem na porta 3000

// const rotas ={
//   "/": "Curso de Express API",
//   "/livros": "Entrei na rota livros",
//   "/autores": "entrei na rota autores"
// }

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end(rotas[req.url]);
// });

// server.listen(PORT, () => {
//     console.log("Servidor escutando!")
// }); //está ouvindo as conexões que ocorrem na porta 3000

