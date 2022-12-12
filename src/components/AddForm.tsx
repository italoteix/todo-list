import { ChangeEvent, SyntheticEvent, useState } from 'react';
import plusIcon from '../assets/plus.svg'
import styles from './AddForm.module.css'

interface AddFormProps {
    onAddTodo: (text: string) => void;
}

export function AddForm({ onAddTodo }: AddFormProps) {
    const [todoMessage, setTodoMessage] = useState('')

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();

        onAddTodo(todoMessage)
        setTodoMessage('')
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTodoMessage(event.target.value)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
                type="search"
                name="todo"
                placeholder="Adicione uma nova tarefa"
                className={styles.input}
                value={todoMessage}
                onChange={handleInputChange}
            />
            <button type="submit" className={styles.button}>
                Criar
                <img src={plusIcon} alt="plus" />
            </button>
        </form>
    )
}