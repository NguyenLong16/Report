import { useState } from "react";

const DemoControlled = () => {
    const [name, setName] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Tên: " + name);
    };

    const handleChangeName = (e: any) => {
        setName(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={name}
                onChange={handleChangeName}
                placeholder="Nhập tên..."
            />
            <p>{name}</p>
            <button type="submit">Gửi</button>
        </form>
    );
}

export default DemoControlled;
