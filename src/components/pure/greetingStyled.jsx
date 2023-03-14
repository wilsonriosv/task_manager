import React, { useState } from 'react'

//Definiendo estoilos en constantes
// ? Estilo para usuario logueado
const loggedStyle = {
    color: 'blue'
}
// ? Estilo para usuario no logueado
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

export const Greetingstyled = (props) => {
    /* Generamos un estado para el componente
        y asi controlar si el usuario esta o no logueado */
    const [logged, setlogged] = useState(false)
    return (
        <div>
            <p>Hola {props.name}</p>
            <button onClick={() => {
                console.log('Botón pulsado');
                setlogged(!logged);
            }}>
                {logged ? 'Logout' : 'Login'}
            </button>
        </div>
    )
}
 