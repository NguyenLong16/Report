import { useRef } from "react";

function DemoUncontrolled() {
    const nameRef = useRef("");

    const handleChange = (e: any) => {
        nameRef.current = e.target.value;
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        alert("Tên: " + nameRef.current);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} placeholder="Nhập tên..." />
            <button type="submit">Gửi</button>
        </form>
    );
}

export default DemoUncontrolled;
