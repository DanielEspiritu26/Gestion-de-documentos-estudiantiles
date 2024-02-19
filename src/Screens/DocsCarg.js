import React, { useState } from "react";
import styles from "./DocsCarg.module.css";
import Step from "../Components/Step";

const DocsCarg = ({ totalDocuments }) => {
  const [uploadedDocuments, setUploadedDocuments] = useState(0);

  const steps = [
    
  ];

  const handleDocumentUpload = () => {
    setUploadedDocuments(uploadedDocuments + 1);
  };

  return (
    <div name="DocsCarg" className={styles.DocsCarg}>
      <h2 className={styles.title}>Documentos Cargados</h2>
      {steps.map((step) => (
        <Step key={step.id} text={step.text} step={step.id} />
      ))}
      <div className={styles.progressBar}>
        <p>
          Documents uploaded: {uploadedDocuments} / {totalDocuments}
        </p>
        <div className={styles.progress}>
          <div
            className={styles.progressBarFill}
            style={{ width: `${(uploadedDocuments / totalDocuments) * 100}%` }}
          ></div>
        </div>
      </div>
      <button onClick={handleDocumentUpload}>Upload Document</button>
    </div>
  );
};

export default DocsCarg;
