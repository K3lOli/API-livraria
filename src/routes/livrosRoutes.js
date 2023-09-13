import  express  from "express";
import LivroController from "../controllers/livroController.js";

const livrosRoutes = express.Router();

livrosRoutes.get("/livros", LivroController.listarLivros);
livrosRoutes.get("/livros/busca", LivroController.listarLivrosPorEditora);
livrosRoutes.get("/livros/:id", LivroController.listarLivrosPorId);
livrosRoutes.post("/livros", LivroController.cadastrarLivro);
livrosRoutes.put("/livros/:id", LivroController.atualizarLivroPorId);
livrosRoutes.delete("/livros/:id", LivroController.excluirLivroPorId);

export default livrosRoutes;