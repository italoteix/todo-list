import type { Todo } from './Todos'

import styles from './TodoHeader.module.css'

interface TodoHeaderProps {
    todos: Todo[];
}

export function TodoHeader({ todos }: TodoHeaderProps) {
    const [created, done] = todos.reduce((acc, todo) => {
        acc[0] = acc[0] + 1
        if (todo.checked) {
            acc[1] = acc[1] + 1
        }
        return acc
    }, [0, 0])

    const doneCounterMessage = created ? `${done} de ${created}` : 0

    return (
        <header className={styles.header}>
            <div className={styles['header-item']}>
                <p className={styles.created}>Tarefas criadas</p>
                <span className={styles.counter}>{created}</span>
            </div>

            <div className={styles['header-item']}>
                <p className={styles.done}>Concluídas</p>
                <span className={styles.counter}>{doneCounterMessage}</span>
            </div>
        </header>
    )
}