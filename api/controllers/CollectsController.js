const database = require('../models');


class CollectsController {
    static async getAll(req, res){
        try{
            const todosOsUsuarios = await database.Usuario.findAll()
            return res.status(200).json(todosOsUsuarios)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmUsuario(req,res) {
        const {id} = req.params
        try {
            const umUsuario = await database.Usuario.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umUsuario)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async criaCollect(req, res) {
        const nova = req.body;
        try {
            const novaCriada = await database.Collects.create(nova);
            return res.status(200).json(novaCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    

    //Atualizar um registro//
    static async atualizaUsuario(req, res){
        const {id} = req.params
        const novasInfos = req.body
        try{
            await database.Usuario.update(novasInfos, { where: {id: Number(id)} })
            const UsuarioAtualizado = await database.Usuario.findOne({where: {id: Number(id)}})
            return res.status(200).json(UsuarioAtualizado)
        }catch(error){
            return req.status(500).json(error.message)
        }
    }

    //deletar um registro//

    static async apagaUsuario(req, res){
        const {id} = req.params
        try{
            await database.Usuario.destroy( {where: {id: Number(id)}} )
            return res.status(200).json(`O id: ${id} foi deletado`)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = CollectsController;