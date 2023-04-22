import { useContext } from 'react';
import { Context } from '../../Context/AuthContext'


function Perfil () {
    const { email } = useContext(Context);
    return (
        <h1>
            Teste : {email}
        </h1>
    )
}

export default Perfil