import { EmptyList } from './EmptyList'
import { Todo } from './Todo'

import styles from './Todos.module.css'

export interface Todo {
    id: number;
    checked: boolean;
    text: string;
}

interface TodosProps {
    todos: Todo[];
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}

export function Todos({ todos, onDelete, onToggle }: TodosProps) {
    return (
        todos.length > 0 ? (
            <div className={styles['list-container']}>
                {
                    todos.map(todo => (
                        <Todo
                            key={todo.id}
                            checked={todo.checked}
                            text={todo.text}
                            onDelete={() => onDelete(todo.id)}
                            onToggle={() => onToggle(todo.id)}
                        />
                    ))
                }
            </div>
        ) : (
            <EmptyList />
        )
    )
}