import trashIcon from '../assets/trash.svg'
import checkIcon from '../assets/check.svg'
import styles from './Todo.module.css'

interface TodoProps {
    text: string;
    checked: boolean;
    onDelete: () => void;
    onToggle: () => void;
}

export function Todo({ checked, text, onDelete, onToggle }: TodoProps) {
    return (
        <div className={`${styles.container}${checked ? ' ' + styles.checked : ''}`}>
            <button onClick={onToggle}>
                <span className={styles['check-button']}>
                    { checked && <img src={checkIcon} alt="check" /> }
                </span>
            </button>
            <p>{text}</p>
            <button onClick={onDelete}>
                <img src={trashIcon} alt="delete" />
            </button>
        </div>
    )
}