import React, { useState } from "react";
import styles from "./Inicio.module.css";

const Inicio = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const userData = { username, password };
    onLogin(userData);
  };

  return (
    <div name="Inicio" className={styles.Inicio}>
      <div className={styles.titleContainer}>
        <p className={styles.welcomeText}>
          Bienvenido <br />
          
        </p>
      </div>
      <div className={styles.formContainer}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Iniciar sesión</button>
      </div>
      <div className={styles.ctaContainer}>
        <p>
          ¿No tienes una cuenta?{" "}
          <a
            href="https://www.tusitioderegistro.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.callToAction}
          >
            Regístrate aquí
          </a>
        </p>
      </div>
    </div>
  );
};

export default Inicio;
