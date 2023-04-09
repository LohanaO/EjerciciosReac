import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Contact extends Component {

    constructor(props){
  
    }

    render() {
        return (
            <div>
                <h1>
                    CONTACTO
                </h1>
                <h2>
                    NOMBRE: {this.props.nombre}
                </h2>
                <h2>
                    APELLIDO: {this.props.apellido}
                </h2>
                <h2>
                    EMAIL: {this.props.emal}
                </h2>
                <h2>
                    ESTADO: { this.estado ? 'Contacto en linea' : 'Contacto No Disponible' }
                </h2>
                

            </div>
        );
    }
}


Contact.propTypes = {
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    emai: PropTypes.string,
    estado: PropTypes.bool


};


export default Contact;
