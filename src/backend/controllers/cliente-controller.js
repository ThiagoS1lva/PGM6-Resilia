import ClienteDAO from '../DAO/clienteDAO.js'
import Cliente from '../models/cliente.js'


class ClienteController {
    static rotas(app) {
        app.get('/Clientes', ClienteController.listar)
        app.get('/Cliente/id/:id', ClienteController.buscarPorID)
        app.post('/Cliente', ClienteController.inserir)
        app.put('/Cliente/id/:id', ClienteController.atualizaCliente)
        app.delete('/Cliente/id/:id', ClienteController.deletarCliente)
    }

    
    // GET para listar todos
    static async listar(req, res) {
        const clientes = await ClienteDAO.listar()
        res.status(200).send(clientes)
    }


    // GET para buscar apenas 1 pela ID
    static async buscarPorID(req, res) {
        const cliente = await ClienteDAO.buscarPorID(req.params.id)
        if (!cliente) {
            res.status(404).send("Cliente não encontrado")
            return
        }
        res.status(200).send(cliente)
    }



    // POST - Adicionar 1 coletador
    static async inserir(req, res) {
        const cliente = new Cliente(
            req.body.username,
            req.body.email,
            req.body.password,
        )
        if (!cliente.username || !cliente.email || !cliente.password) {
            res.status(400).send("Precisa passar todas as informações")
            return
        }
        const result = await ClienteDAO.inserir(cliente)
        if (result.erro) {
            res.status(500).send(result)
            return
        }
        res.status(201).send({ "Mensagem": "Cliente criado com sucesso", "Novo Cliente: ": cliente })
    }


    // PUT - Editar um coletador
    static async atualizaCliente(req, res) {
        try {const cliente = new Cliente(
            req.body.username,
            req.body.email,
            req.body.password,
            
        )
        if (!cliente || !cliente.username || !cliente.email || !cliente.password) {
            res.status(400).send("Precisa passar todas as informações")
            return
        }
        if (!Object.keys(cliente).length) {
            res.status(400).send('O objeto está sem chave')
            return
        }
        const result = await ClienteDAO.atualizar(req.params.id, cliente)
        if (result.erro) {
            res.status(500).send('Erro ao atualizar o cliente')
            return
        }
        res.status(200).send({ "Mensagem": "Dados atualizados", "cliente: ": cliente })
    } catch (err) {
        console.log(err)
        res.status(500).send('Erro ao atualizar o cliente')
    }}


    // DELETE - Deletar 1 coletador
    static async deletarCliente(req, res) {
        const cliente = await ClienteDAO.buscarPorID(req.params.id)
        if (!cliente) {
            res.status(404).send("cliente não encontrado")
            return
        }
        const result = await ClienteDAO.deletar(req.params.id)
        if (result.erro) {
            res.status(400).send({ 'Mensagem': 'Coletador não deletado' })
            return
        }
        res.status(200).send(result)
    }
}

export default ClienteController

