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
    /* const greetingUser = () => { <p>Hola {props.name}</p> }
    const pleaseLogin = () => {<p>Por favor loguéate</p>} */

    return (
        <div style={ logged ? loggedStyle : unloggedStyle}>
            {/* { logged ? greetingUser : pleaseLogin } */}
            { logged ? <p>Hola {props.name}</p> : <p>Por favor loguéate</p>}
            <button onClick={() => {
                console.log('Botón pulsado');
                setlogged(!logged);
            }}>
                {logged ? 'Logout' : 'Login'}
            </button>
        </div>
    )
}
 