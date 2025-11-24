import { useState } from "react";

interface TodoInputProp {
    onAddTodo: (text: string) => void;
}

const TodoInput = ({ onAddTodo }: TodoInputProp) => {
    const [text, setText] = useState("");

    const handleAddTodo = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            onAddTodo(text);
            setText("");
        }
    };

    return (
        <div className="w-full max-w-md mx-auto mt-5">
            <form
                onSubmit={handleAddTodo}
                className="flex items-center gap-2 bg-white p-3 rounded-xl shadow"
            >
                <input
                    type="text"
                    placeholder="Nhập vào đây..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:scale-95 transition"
                >
                    Thêm
                </button>
            </form>
        </div>
    );
};

export default TodoInput;
