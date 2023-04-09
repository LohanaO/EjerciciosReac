import React from 'react';
import PropTypes from 'prop-types';
import { contacto } from '../../models/contacto.class';
import ComponenteB from './componenteB';




const ComponenteA = ({contacto}) => {
    return (
        <div>
            <h2> Nombre: {contacto.nombre}</h2>
            <h3> Apellido: {contacto.apellido}</h3>
            <h3> Email: {contacto.email}</h3>
            <ComponenteB estado={true}></ComponenteB>
        </div>
    );
};


ComponenteA.propTypes = {
contacto: PropTypes.instanceOf(contacto)
};


export default ComponenteA;

