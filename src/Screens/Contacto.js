import React from "react";
import styles from "./Contacto.module.css";

const Contacto = () => {
  return (
    <div name="Contacto" className={styles.contacto}>
      <h2>Escríbenos</h2>
      <form
        className={styles.form}
        method="POST"
        action="https://getform.io/f/718583e8-f2fc-4e02-a970-9f8a6eaa2036"
      >
        <label htmlFor="Name">Nombre</label>
        <input id="Name" name="Name" className={styles.input}></input>
        <label htmlFor="Email">Correo Electrónico</label>
        <input
          id="Email"
          name="Email"
          type="email"
          className={styles.input}
        ></input>
        <label htmlFor="Message">Escribe tu Queja o Sugerencia</label>
        <textarea id="Message" className={styles.textArea}></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
