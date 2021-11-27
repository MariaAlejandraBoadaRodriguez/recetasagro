import React from "react";
import styles from './footerPage.module.css';

function Footer() {
    return (
      <div className={styles.footer}>
        <div className={styles.escritorio}>
          <button className={styles.boton}>Enviar</button>
        </div>
      </div>
    );
  }
  
  export default Footer;
  