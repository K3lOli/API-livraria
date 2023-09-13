import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {
  static async listarLivros(req, res) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async listarLivrosPorId(req, res) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id);
      res.status(200).json(livroEncontrado);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição do livro` });
    }
  }

  static async cadastrarLivro(req, res) {
    const novoLivro =req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = {...novoLivro, autor: { ...autorEncontrado._doc }};
      const livroCriado = await livro.create(livroCompleto);
      res.status(201).json({ message: "criado com sucesso", livro: livroCompleto });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao cadastrar livro` });
    }
  }

  static async atualizarLivroPorId(req, res) {
    const novaAtualizacaoDeLivro =req.body;
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(novaAtualizacaoDeLivro.autor);
      const livroAtualizado = {...novaAtualizacaoDeLivro, autor: { ...autorEncontrado._doc }};
      await livro.findByIdAndUpdate(id, livroAtualizado);
      res.status(200).json({ message : "livro atualizado"});
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha atualização do livro` });
    }
  }

  static async excluirLivroPorId(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({ message : "livro deletado"});
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha exclusão do livro` });
    }
  }

  static async listarLivrosPorEditora(req, res){
    const editora = req.query.editora;
    try{
      const livrosPorEditora = await livro.find({ editora: editora });
      res.status(200).json(livrosPorEditora);
    }catch(erro){
      res
      .status(500)
      .json({ message: `${erro.message} - falha na busca` });
    }
  }
}

export default LivroController;
