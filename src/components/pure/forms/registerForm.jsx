/**
 * Componente para el formularo de registro de nuevos usuarios
 */

import React, { useState } from 'react'

const Registerform = () => {
    const initialData = [
        {
            user: '',
            name: '',
            email:'',
            password:''
        }
    ];

    const [data, setCredentials] = useState(initialData);

  return (
    <div>
        
    </div>
  )
}

export default Registerform