import logo from '../assets/Logo.svg'
import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.container}>
            <img src={logo} alt="a rocket with the text todo on the right" />
        </header>
    )
}