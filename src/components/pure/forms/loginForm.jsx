/**
 * Componente para el formularo de autenticacion de usuarios
 */

import React, { useState } from 'react'

const Loginform = () => {

    const initialCredentials = [
        {
            user: '',
            password:''
        }
    ];

    const [credentials, setCredentials] = useState(initialCredentials);

    return (
        <div>
            
        </div>
    )
}

export default Loginform