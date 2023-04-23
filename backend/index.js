// Importando o packages
import express from 'express'
import cors from 'cors'

// instanciando o servidor
const app = express()

// configurando o servidor para receber requisições com o corpo no formato JSON
app.use(express.json());
app.use(cors())

// importando os controllers
import ColetadorController from './controllers/coletador-controller.js';
import ClienteController from './controllers/cliente-controller.js';
import EmpresaController from './controllers/empresa-controller.js';

ColetadorController.rotas(app);
ClienteController.rotas(app);
EmpresaController.rotas(app);

export default app
