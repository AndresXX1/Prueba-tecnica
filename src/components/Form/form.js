import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    type: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const [notification, setNotification] = useState('');
  const [formValid, setFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Real-time validation
    if (name === 'name') {
      if (value.length < 4) {
        setErrors({ ...errors, name: 'El nombre no puede tener menos de cuatro caracteres' });
      } else if (value.length > 10) {
        setErrors({ ...errors, name: 'El nombre no puede tener más de diez caracteres' });
      } else if (!/^[a-zA-Z]+$/.test(value)) {
        setErrors({ ...errors, name: 'No se pueden ingresar caracteres especiales en el nombre' });
      } else {
        setErrors({ ...errors, name: '' });
      }
    } else if (name === 'lastName') {
      if (value.length < 4) {
        setErrors({ ...errors, lastName: 'El apellido no puede tener menos de cuatro caracteres' });
      } else if (value.length > 10) {
        setErrors({ ...errors, lastName: 'El apellido no puede tener más de diez caracteres' });
      } else if (!/^[a-zA-Z]+$/.test(value)) {
        setErrors({ ...errors, lastName: 'No se pueden ingresar caracteres especiales en el apellido' });
      } else {
        setErrors({ ...errors, lastName: '' });
      }
    } else if (name === 'email') {
      if (!/\S+@\S+\.\S+/.test(value)) {
        setErrors({ ...errors, email: 'El email ingresado no es válido' });
      } else {
        setErrors({ ...errors, email: '' });
      }
    } else if (name === 'phone') {
      if (!/^\d*$/.test(value)) {
        setErrors({ ...errors, phone: 'El teléfono solo puede contener números' });
      } else if (value.length > 10) {
        setErrors({ ...errors, phone: 'El teléfono no puede tener más de diez dígitos' });
      } else {
        setErrors({ ...errors, phone: '' });
      }
    }

   
    const isFormValid = Object.values(errors).every((error) => error === '');
    setFormValid(isFormValid);
  };

  const handleSelectChange = (e) => {
    setFormData({ ...formData, city: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!formData.name || !formData.lastName || !formData.email || !formData.phone || !formData.city) {
      setNotification('Completa todos los campos antes de enviar');
      return;
    }

   
    setNotification('¡Formulario enviado con éxito!');
    setFormData({
      name: '',
      lastName: '',
      email: '',
      phone: '',
      city: '',
      type: '',
    });
    setTimeout(() => setNotification(''), 7000); 
    setErrors({
      name: '',
      lastName: '',
      email: '',
      phone: '',
    });
    setFormValid(false);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      lastName: '',
      email: '',
      phone: '',
      city: '',
      type: '',
    });
    setErrors({
      name: '',
      lastName: '',
      email: '',
      phone: '',
    });
    setNotification('');
    setFormValid(false);
  };

  return (
    <div className={styles.container}>
      <h2>Contacto</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="name">Nombre:</label><br/>
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nombre"
          /><br/>
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="lastName">Apellido:</label><br/>
          <input
            className={styles.input}
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Apellido"
          /><br/>
          {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">Email:</label><br/>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          /><br/>
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="phone">Teléfono:</label><br/>
          <input
            className={styles.input}
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Teléfono"
          /><br/>
          {errors.phone && <span className={styles.error}>{errors.phone}</span>}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="city">Ciudad:</label><br/>
          <select
            className={styles.select}
            id="city"
            name="city"
            value={formData.city}
            onChange={handleSelectChange}
          >
            <option value="">Selecciona una ciudad</option>
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Santiago">Santiago</option>
            <option value="Lima">Lima</option>
            <option value="Bogotá">Bogotá</option>
            <option value="Ciudad de México">Ciudad de México</option>
            
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Tipo:</label>
          <div className={styles.inputContainer}>
            <input
              className={styles.radio}
              type="radio"
              id="person"
              name="type"
              value="person"
              onChange={handleChange}
              checked={formData.type === 'person'}
            />
            <label className={styles.label} htmlFor="person">Persona</label>
            <input
              className={styles.radio}
              type="radio"
              id="company"
              name="type"
              value="company"
              onChange={handleChange}
              checked={formData.type === 'company'}
            />
            <label className={styles.label} htmlFor="company">Empresa</label>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.button} type="submit" disabled={!formValid}>Enviar</button>
          <button className={styles.button2} type="button" onClick={handleReset}>Reset</button>
        </div>
      </form>

      <div className={`${styles.notification} ${notification ? (notification.includes('éxito') ? styles.success : styles.error) : ''}`}>
        {notification}
      </div>
    </div>
  );
};

export default ContactForm;