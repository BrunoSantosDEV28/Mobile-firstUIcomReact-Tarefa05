import React from "react";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>Cabeçalho</header>
      <nav className={styles.globalMenu}>Menu Global</nav>
      <aside className={styles.contextMenu}>Menu Contextualizado</aside>
      <main className={styles.mainContent}>Conteúdo Principal</main>
      <div className={styles.adArea}>Área de Anúncio</div>
      <footer className={styles.footer}>Rodapé</footer>
    </div>
  );
}

export default App;
