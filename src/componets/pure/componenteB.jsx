import React, { useState } from 'react';
import PropTypes from 'prop-types';


const ComponenteB = (estado) => {
    const [conectado, setconectado]= useState(estado);
    return (
        <div>
            <h3> {conectado === false ? 'Contacto no disponible' : 'Contacto En linea'}</h3>
    <button onClick={() => setconectado(!conectado)}>{conectado === false ? 'Conectado' : 'Desconectado'}</button>
        </div>
    );
};


ComponenteB.propTypes = {
    estado: PropTypes.bool
};


export default ComponenteB;
