import styles from './Footer.module.css'
export default function Footer(){

  return(
    <center>
    <div className={styles.inferior}>
      <h1 id={styles.contato}> Contatos</h1>
      <a className={styles.invisibleButton} href="cadastro.html">JPtechnologies | 2023</a>
      <p>R. Dr. Gilberto Studart, 55 - Cocó, Fortaleza - CE (sala 805 - Torre Norte) </p>
      <p>CEP: 60192-010 | CNPJ: 35.721.625/0001-27 </p>
      <p>Telefone: <a href="tel:+55 (85) 3085-4522">+55 (85) 3085-4522</a> | Email: <a
              href="mailto:jptechnologies.ce@gmail.com">jptechnologies.ce@gmail.com</a></p>
      <p>Seja redirecionado à página de suporte:
          <a id={styles.sup}
              href="https://jptechnologies.com.br/index.php/suporte/">https://jptechnologies.com.br/index.php/suporte/</a>
      </p>
    </div>
    </center>
  );
}
