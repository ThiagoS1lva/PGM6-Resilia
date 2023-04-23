import StaffDAO from '../DAO/StaffDAO.js'
import Funcionario from '../models/Funcionario.js'


class FuncionarioController {
    static rotas(app) {
        app.get('/funcionarios', FuncionarioController.listar)
        }

    // GET - listar todos os registros
  static async listar(req, res) {
    try {
      const funcionariosDB = await StaffDAO.listar()
      const funcionarios = funcionariosDB.map(funcionarioDB => {
        const { id, nome, cpf, cargo, salario, rotafoto } = funcionarioDB
        return new Funcionario(id, nome, cpf, cargo, salario, rotafoto)
      })
      res.status(200).json(funcionarios)
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Erro ao listar funcionários' })
    }
  }
}
export default FuncionarioController;