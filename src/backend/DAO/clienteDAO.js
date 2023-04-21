// Importa o db.js para poder usar o banco de dados simulado
import db from "../infra/db.js" ;



// Essa classe encapsula o acesso ao Banco de Dados. Todos os métodos abaixos são estáticos. Isso quer dizer que não precisamos instanciar a classe para usá-los e serão chamados pela classe coletadorController... Alguns vão dar retorno e para outros, isso não será necessário
class ColetadorDAO {

  // GET  --  Função ALL - Retorna todas as linhas. No callback existe o argumento ROWS
  static listar() {
    const query = "SELECT * FROM Cliente";
    return new Promise((resolve, reject) => {
      db.all(query, (err, rows) => {
        if (err) {
          reject(err);
        }
        resolve(rows);
      });
    });
  }

  // GET  --  
  static buscarPorID(id) {
    const query = "SELECT * FROM Cliente WHERE id = ?";
    return new Promise((resolve, reject) => {
      db.get(query, [id], (err, row) => {
        if (err) {
          reject(false);
        }
        resolve(row);
      });
    });
  }


  // POST
  static inserir(cliente) {
    const query = "INSERT INTO Cliente (username, email, password) VALUES(?, ?, ?)";
    return new Promise((resolve, reject) => {
      db.run(query, [cliente.username, cliente.email, cliente.password], (err) => {
        if (err) {
          reject({
            mensagem: "Erro ao inserir o cliente",
            error: err,
          });
        }
        resolve(cliente);
      });
    });
  }

  // PUT  --  
  static atualizar(id, cliente) {
    const query =
      "UPDATE Cliente SET username = ?, email = ?, password = ? WHERE id = ?";
    return new Promise((resolve, reject) => {
      db.run(
        query,
        [cliente.username, cliente.email, cliente.password, id],
        (err) => {
          if (err) {
            reject({
              mensagem: "Erro ao atualizar o cliente",
              erro: err,
            });
          }
          resolve({
            mensagem: "cliente atualizado com sucesso"
          });
        }
      );
    });
  }


  // DELETE  --  
  static deletar(id) {
    const query = "DELETE FROM Cliente WHERE id = ?";
    return new Promise((resolve, reject) => {
      db.run(query, [id], (err) => {
        if (err) {
          reject({
            mensagem: "Erro ao deletar o cliente",
            erro: err,
          });
        }
        resolve({ mensagem: "Cliente deletado com sucesso", id: id });
      });
    });
  }
}


// Exporta a classe
export default ColetadorDAO;