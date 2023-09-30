import React, { useState } from 'react';
import '../Contacto/Contacto.css';

export const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    celular: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor
    console.log(formData);
  };

  return (
    <div className="formulario-container">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">NOMBRE</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="apellido">APELLIDO</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">CORREO ELECTRÓNICO</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="celular">CELULAR</label>
          <input
            type="tel"
            id="celular"
            name="celular"
            value={formData.celular}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">MENSAJE</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};
