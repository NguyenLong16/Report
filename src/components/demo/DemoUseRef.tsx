import { useEffect, useRef, useState } from "react"

const DemoUseRef = () => {
    const inputRef = useRef(null)
    const countRef = useRef(0)
    const [value, setValue] = useState(0)
    const prevRef = useRef(0)

    useEffect(() => {
        prevRef.current = value
    }, [value])

    const handleClick = () => {
        countRef.current++
        console.log('giá trị: ', countRef.current);

    }

    const handleFocus = () => {
        inputRef.current.focus()
    }
    return (
        <>
            <div>
                <input ref={inputRef} type="text" />
                <button onClick={handleFocus}>Focus input</button>
            </div>
            <div>
                <button onClick={handleClick}>Click</button>
            </div>
            <div>
                <p>Giá trị trước đó {prevRef.current}</p>
                <p>Giá trị hiện tại {value}</p>
                <button onClick={() => setValue(value + 1)}>Tăng</button>
            </div>
        </>
    )
}

export default DemoUseRef