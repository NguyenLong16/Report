import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import useTodo from "../../hooks/useTodo";

const Todo = () => {
    const { todos, addTodo, editTodo, handleDeleteTodo, handleToggleTodo } =
        useTodo();

    return (
        <div className="w-full max-w-xl mx-auto mt-10 p-5">
            {/* Title */}
            <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
                Todo App
            </h1>

            {/* Input */}
            <TodoInput onAddTodo={addTodo} />

            {/* List Items */}
            <div className="mt-5">
                {todos.length === 0 ? (
                    <p className="text-center text-gray-500 mt-4">
                        Chưa có công việc nào
                    </p>
                ) : (
                    todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onToggleTodo={handleToggleTodo}
                            onDeleteTodo={handleDeleteTodo}
                            onEditTodo={editTodo}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Todo;
