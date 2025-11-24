import { useState } from "react"
import type { Todo } from "../lib/todo"

const useTodo = () => {
    const [todos, setTodos] = useState<Todo[]>(
        [
            { id: 1, text: 'React', complete: false },
            { id: 2, text: 'Angular', complete: true },
            { id: 3, text: 'Java', complete: false },
        ]
    )

    const editTodo = (id: number, newText: string) => {
        setTodos(prev => prev.map(todo =>
            todo.id === id ? { ...todo, text: newText } : todo
        ))
    }

    const addTodo = (text: string) => {
        const newTodo: Todo = {
            id: Date.now(),
            text,
            complete: false
        }
        setTodos([...todos, newTodo])
    }

    const handleToggleTodo = (id: number) => {
        setTodos(prev => prev.map(todo =>
            todo.id === id ? { ...todo, complete: !todo.complete } : todo
        ))
    }

    const handleDeleteTodo = (id: number) => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }

    return { todos, editTodo, addTodo, handleDeleteTodo, handleToggleTodo }
}

export default useTodo

