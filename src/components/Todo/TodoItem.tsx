import { useState } from "react";
import type { Todo } from "../../lib/todo";

interface TodoItemProp {
    todo: Todo;
    onToggleTodo: (id: number) => void;
    onDeleteTodo: (id: number) => void;
    onEditTodo: (id: number, newText: string) => void;
}

const TodoItem = ({
    todo,
    onEditTodo,
    onToggleTodo,
    onDeleteTodo,
}: TodoItemProp) => {
    const [isEditting, setIsEditting] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleClickSave = () => {
        if (editText.trim()) {
            onEditTodo(todo.id, editText);
            setEditText("");
            setIsEditting(false);
        }
    };

    const handleClickCancelEdit = () => {
        setEditText(todo.text);
        setIsEditting(false);
    };

    return (
        <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow mb-2">
            {/* Checkbox */}
            <div className="flex items-center gap-3 flex-1">
                <input
                    type="checkbox"
                    checked={todo.complete}
                    onChange={() => onToggleTodo(todo.id)}
                    className="w-4 h-4 cursor-pointer"
                />

                {isEditting && todo.complete == false ? (
                    <div className="flex items-center gap-2 flex-1">
                        <input
                            type="text"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            autoFocus
                            className="flex-1 px-2 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />

                        <button
                            onClick={handleClickSave}
                            className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                        >
                            Lưu
                        </button>
                        <button
                            onClick={handleClickCancelEdit}
                            className="px-3 py-1 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition"
                        >
                            Hủy
                        </button>
                    </div>
                ) : (
                    <div className="flex items-center justify-between flex-1">
                        <span
                            className={`${todo.complete ? "line-through text-gray-400" : "text-gray-800"
                                }`}
                        >
                            {todo.text}
                        </span>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setIsEditting(true)}
                                className="px-3 py-1 text-sm bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                            >
                                Sửa
                            </button>
                            <button
                                onClick={() => onDeleteTodo(todo.id)}
                                className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                            >
                                Xóa
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TodoItem;
