import {Link} from 'react-router-dom'
import styles from './Header.module.css'

export default function Header(){
  return(
    <header>
      <Link href="https://jptechnologies.com.br/" rel ="noreferrer" target="_blank">
        <img className={styles.logo} src="https://drive.google.com/uc?id=1SP0GUW-7gVjLfpKipeyzxOgZ3hshNlaG" alt="Logo" />
      </Link>
      <nav className={styles.menu}>
        <Link className={styles.item} to="/Home">Início</Link>
        <Link className={styles.item} to="/Formulario">Formulário</Link>
        <Link className={styles.item} to="/Configuracao">Configurações</Link>
        <Link className={styles.item} to="/Login">Logout</Link>
      </nav>
    </header>
  )
}
