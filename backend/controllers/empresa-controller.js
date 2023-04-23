import EmpresaDAO from '../DAO/empresaDAO.js'
import Empresa from '../models/empresa.js'


class EmpresaController {
    static rotas(app) {
        app.get('/Empresas', EmpresaController.listar)
        app.get('/Empresa/id/:id', EmpresaController.buscarPorID)
        app.post('/Empresa', EmpresaController.inserir)
        app.post('/Empresa/login', EmpresaController.login)
        app.put('/Empresa/id/:id', EmpresaController.atualizaEmpresa)
        app.delete('/Empresa/id/:id', EmpresaController.deletarEmpresa)
    }

    
    // GET para listar todos
    static async listar(req, res) {
        const empresas = await EmpresaDAO.listar()
        res.status(200).send(empresas)
    }


    // GET para buscar apenas 1 pela ID
    static async buscarPorID(req, res) {
        const empresa = await EmpresaDAO.buscarPorID(req.params.id)
        if (!empresa) {
            res.status(404).send("empresa não encontrado")
            return
        }
        res.status(200).send(empresa)
    }

    //LOGIN
    static async login(req, res) {
        const { email, password } = req.body

        try {
            const empresa = await EmpresaDAO.buscarPorEmailESenha(email, password);

            if (!empresa) {
                res.status(401).send('Email ou senha inválidos');
            } else {
                const token = 'token_de_autenticacao';
                res.cookie('token', token);
                res.send(empresa);
            }
        } catch(err) {
            console.log(err);
            res.status(500).send('Erro ao realizar login');
        }
    }


    // POST - Adicionar 1 coletador
    static async inserir(req, res) {
        const empresa = new Empresa(
            req.body.nome,
            req.body.telefone,
            req.body.cnpj,
            req.body.email,
            req.body.password
        )
        if (!empresa.nome || !empresa.telefone || !empresa.cnpj || !empresa.email || !empresa.password) {
            res.status(400).send("Precisa passar todas as informações")
            return
        }
        const result = await EmpresaDAO.inserir(empresa)
        if (result.erro) {
            res.status(500).send(result)
            return
        }
        res.status(201).send({ "Mensagem": "empresa criado com sucesso", "Novo empresa: ": empresa })
    }


    // PUT - Editar um coletador
    static async atualizaEmpresa(req, res) {
        try {const empresa = new Empresa(
            req.body.nome,
            req.body.telefone,
            req.body.cnpj,
            req.body.email,
            req.body.password
        )
        if  (!empresa.nome || !empresa.telefone || !empresa.cnpj || !empresa.email || !empresa.password) {
            res.status(400).send("Precisa passar todas as informações")
            return
        }
        if (!Object.keys(empresa).length) {
            res.status(400).send('O objeto está sem chave')
            return
        }
        const result = await EmpresaDAO.atualizar(req.params.id, empresa)
        if (result.erro) {
            res.status(500).send('Erro ao atualizar o empresa')
            return
        }
        res.status(200).send({ "Mensagem": "Dados atualizados", "empresa: ": empresa })
    } catch (err) {
        console.log(err)
        res.status(500).send('Erro ao atualizar o empresa')
    }}


    // DELETE - Deletar 1 empresa
    static async deletarEmpresa(req, res) {
        const empresa = await EmpresaDAO.buscarPorID(req.params.id)
        if (!empresa) {
            res.status(404).send("empresa não encontrado")
            return
        }
        const result = await EmpresaDAO.deletar(req.params.id)
        if (result.erro) {
            res.status(400).send({ 'Mensagem': 'Empresa não deletado' })
            return
        }
        res.status(200).send(result)
    }
}

export default EmpresaController

