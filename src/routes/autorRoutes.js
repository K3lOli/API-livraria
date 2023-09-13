import  express  from "express";
import AutorController from "../controllers/autorController.js";

const autoresRoutes = express.Router();

autoresRoutes.get("/autores", AutorController.listarAutores);
autoresRoutes.get("/autores/:id", AutorController.listarAutoresPorId);
autoresRoutes.post("/autores", AutorController.cadastrarAutor);
autoresRoutes.put("/autores/:id", AutorController.atualizarAutorPorId);
autoresRoutes.delete("/autores/:id", AutorController.excluirAutorPorId);

export default autoresRoutes;