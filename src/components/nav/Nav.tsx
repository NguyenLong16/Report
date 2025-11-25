import { Link, Route, Routes } from "react-router-dom"
import About from "../About"
import Login from "../Login"
import Home from "../Home"

const Nav = () => {
    return (
        <>
            <div>
                <nav>
                    <Link to="/home">Home</Link> |
                    <Link to="/about">About</Link> |
                    <Link to="/login">Login</Link>
                </nav>
            </div>

            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    )
}

export default Nav