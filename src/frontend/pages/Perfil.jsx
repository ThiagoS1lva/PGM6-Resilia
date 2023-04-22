import { useContext } from 'react';
import { Context } from '../../Context/AuthContext'


function Perfil () {
    const { infoCliente, infoEmpresa } = useContext(Context);
    return (
        <h1>
            Teste : {Object.keys(infoCliente).length === 0 ? infoEmpresa.nome : infoCliente.username}
        </h1>
    )
}

export default Perfil