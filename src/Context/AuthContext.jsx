import React, { createContext, useState, useEffect } from 'react';

const Context = createContext();

function AuthProvider({ children }) {

    const [logado, isLogado] = useState(() => {
        const storedIsLogged = localStorage.getItem('logado');
        return storedIsLogged ? JSON.parse(storedIsLogged) : false;
    });
    const [email, setEmail] = useState('');
    const [password, setSenha] = useState('');

    // GUARDANDO NO LOCAL STORAGE
    useEffect(() => {
        // recupera o valor do local storage quando a página é carregada
        const storedIsLogged = localStorage.getItem('logado');
        if (storedIsLogged) {
            isLogado(JSON.parse(storedIsLogged));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('logado', JSON.stringify(logado));
    }, [logado]);

    return (
        <Context.Provider value={{ logado, isLogado, email, setEmail, password, setSenha }}>
            {children}
        </Context.Provider>
    )
}

export { Context, AuthProvider };