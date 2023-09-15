import './contacto.css'
import React, { useState } from 'react';

const Contacto = () => {
    const [formData, setFormData] = useState({
      nombre: '',
      correo: '',
      celular: '',
      consulta: '',
    });
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(formData); // Aquí puedes realizar acciones como enviar los datos a un servidor
    };
  
    return (
      <div className="contacto">
        <h1>Contacto</h1>
        <form className='contactoForm' onSubmit={handleSubmit}>
          <label className='contactoForm__Label'>
            Nombre:
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Correo Electrónico:
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Celular:
            <input
              type="tel"
              name="celular"
              value={formData.celular}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Consulta:
            <textarea
              name="consulta"
              value={formData.consulta}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }

export default Contacto;