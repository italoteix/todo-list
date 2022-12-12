import clipboardIcon from '../assets/Clipboard.svg'
import styles from './EmptyList.module.css'

export function EmptyList() {
    return (
        <div className={styles.container}>
            <img src={clipboardIcon} alt="clipboard" className={styles.image} />
            <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}