import {autor} from "../models/Autor.js";

class AutorController{
  constructor(){

  }

  static async listarAutores(req, res, next){
    try {
      const allAuthors = await autor.find({});
      res.status(200).json(allAuthors);
    } catch (error) {
      next(error);
    }
  }

  static async criaAutor(req, res, next){

    try {
      const novoAutor = await autor.create(req.body);

      res.status(201).json({
        message: "Autor cadastrado com sucesso",
        autor: novoAutor
      });
    } catch (error) {
      next(error);
    }
  }

  static async listarAutorPorId(req, res, next){
    try {
      const {id} = req.params;
      const autorBuscado = await autor.findById(id);

      if(!autorBuscado){
        res.status(404).json({message: "Autor não encontrado!"});
      }
      res.status(200).json(autorBuscado);
    } catch (error) {
      next(error);
    }
  }

  static async atualizarAutor(req, res, next){
    try {
      const {id} = req.params;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(201).json({message: "Autor atualizado com sucesso!"});
    } catch (error) {
      next(error);
    }
  }

  static async deletarAutorPorId(req, res, next){
    try {
      const {id} = req.params;
      await autor.findByIdAndDelete(id);
      res.status(200).json({message: "Autor excluido com sucesso!"});
    } catch (error) {
      next(error);
    }
  }
}

export default AutorController;