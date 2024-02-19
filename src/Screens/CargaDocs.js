  import React, { useState } from "react";
  import styles from "./CargaDocs.module.css";

  const CargaDocs = () => {
    const [birthCertificate, setBirthCertificate] = useState(null);
    const [curp, setCurp] = useState(null);
    const [secondaryCertificate, setSecondaryCertificate] = useState(null);

    const handleFileChange = (event, setter) => {
      const file = event.target.files[0];
      setter(file);
    };

    const handleUpload = () => {
      console.log("Subir documentos:", birthCertificate, curp, secondaryCertificate);
      
    };

    return (
      <div name="CargaDocs" className={styles.CargaDocs}>
        <div className={styles.titleContainer}>
        <p className={styles.titleText}>
          Carga tus Documentos <br />
          
        </p>
      </div>
        <div className={styles.documentInput}>
          <label className={styles.label}>Acta de nacimiento:</label>
          <input
            type="file"
            accept=".pdf,.jpg,.png"
            onChange={(event) => handleFileChange(event, setBirthCertificate)}
          />
        </div>
        <div className={styles.documentInput}>
          <label className={styles.label}>CURP:</label>
          <input
            type="file"
            accept=".pdf,.jpg,.png"
            onChange={(event) => handleFileChange(event, setCurp)}
          />
        </div>
        <div className={styles.documentInput}>
          <label className={styles.label}>Certificado de secundaria:</label>
          <input
            type="file"
            accept=".pdf,.jpg,.png"
            onChange={(event) => handleFileChange(event, setSecondaryCertificate)}
          />
        </div>
        <button className={styles.uploadButton} onClick={handleUpload}>
          Cargar documentos
        </button>
      </div>
    );
  };

  export default CargaDocs;
