const database = require('../models');
const bcrypt = require('bcrypt');


class loginController {
    static async getAll(req, res){
        try{
            const todosOsLogins = await database.Login.findAll()
            return res.status(200).json(todosOsLogins)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmLogin(req,res) {
        const {id} = req.params
        try {
            const umLogin = await database.Login.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umLogin)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async criaLogin(req, res) {
        const novoLogin = req.body
        try {
            const novoLoginCriado = await database.Login.create(novoLogin)
            return res.status(200).json(novoLoginCriado)
        }catch (error) {
            return req.status(500).json(error.message)
        }
    }

    //Atualizar um registro//
    static async atualizaLogin(req, res){
        const {id} = req.params
        const novasInfos = req.body
        try{
            await database.Login.update(novasInfos, { where: {id: Number(id)} })
            const loginAtualizado = await database.Login.findOne({where: {id: Number(id)}})
            return res.status(200).json(loginAtualizado)
        }catch(error){
            return req.status(500).json(error.message)
        }
    }

    //deletar um registro//

    static async apagaLogin(req, res){
        const {id} = req.params
        try{
            await database.Login.destroy( {where: {id: Number(id)}} )
            return res.status(200).json(`O id: ${id} foi deletado`)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async validaLogin(req, res) {
        const { cpf, senha } = req.body;
    
        try {
            // Procurar o usuário no banco de dados pelo CPF
            const usuario = await database.Usuario.findOne({
                where: {
                    cpf: cpf
                },
                attributes: ['id', 'nome', 'cpf', 'createdAt', 'senha']
            });
    
            // Verificar se o usuário foi encontrado
            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }
    
            // Obter a senha correspondente do usuário
            const senhaCorrespondente = usuario.senha;
    
            // Comparar a senha fornecida com a senha armazenada no banco (sem criptografia)
            if (senha === senhaCorrespondente) {
                // Se a senha for válida, retornar as informações do usuário
                const { id, nome, cpf, createdAt } = usuario;
                return res.status(200).json({ id, nome, cpf, createdAt });
            } else {
                // Se a senha não for válida, retornar uma mensagem de erro
                return res.status(401).json({ message: 'Credenciais inválidas' });
            }
        } catch (error) {
            // Em caso de erro, retornar uma resposta de erro com status 500 e a mensagem de erro
            return res.status(500).json(error.message);
        }
    }    

}

module.exports = loginController;