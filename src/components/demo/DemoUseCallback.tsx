import { useCallback, useState } from "react"
import Child from "./Child";

const DemoUseCallback = () => {
    const [count, setCount] = useState(0)
    const handleAdd = useCallback(() => {
        console.log('Add');

    }, [])
    return (
        <>
            <div>
                <button onClick={() => setCount(count + 1)}>Tăng</button>
            </div>
            <Child onAdd={handleAdd} />
        </>
    )
}

export default DemoUseCallback