// import DemoControlled from "./components/demo/DemoControlled";
// import DemoUncontrolled from "./components/demo/DemoUncontrolled";
// import DemoUseCallback from "./components/demo/DemoUseCallback";
// import DemoUseMemo from "./components/demo/DemoUseMemo";
// import DemoUseMemoTab from "./components/demo/DemoUseMemoTab";
// import DemoUseRef from "./components/demo/DemoUseRef";
// import Nav from "./components/nav/Nav";
// import Todo from "./components/Todo/Todo";
// import { Routes, Route } from "react-router-dom";

import CartStatus from "./components/CartStatus";
import ProductList from "./components/ProductList";
import JobList from "./components/Two/JobList";

// import UserProfile from "./components/One/UserProfile";

function App() {
  return (
    <>
      <div className=" user-profile w-full h-screen flex items-center justify-center bg-[#e6effa]">
        {/* <UserProfile /> */}
        {/* <JobList /> */}
        <ProductList />
        <CartStatus />
      </div>


      {/* <Nav /> */}
      {/* <DemoControlled /> */}
      {/* <DemoUncontrolled /> */}
      {/* <DemoUseRef /> */}
      {/* <DemoUseCallback /> */}
      {/* <Routes>
        <Route path="/" element={<Todo />} />
      </Routes> */}
      {/* <DemoUseMemo /> */}
      {/* <DemoUseMemoTab /> */}
    </>
  )
}

export default App;
