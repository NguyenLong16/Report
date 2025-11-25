import DemoControlled from "./components/demo/DemoControlled";
import DemoUncontrolled from "./components/demo/DemoUncontrolled";
import DemoUseCallback from "./components/demo/DemoUseCallback";
import DemoUseMemo from "./components/demo/DemoUseMemo";
import DemoUseMemoTab from "./components/demo/DemoUseMemoTab";
import DemoUseRef from "./components/demo/DemoUseRef";
import Nav from "./components/nav/Nav";
import Todo from "./components/Todo/Todo";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <DemoControlled />
      <DemoUncontrolled />
      {/* <DemoUseRef /> */}
      {/* <DemoUseCallback /> */}
      <Routes>
        <Route path="/" element={<Todo />} />
      </Routes>
      {/* <DemoUseMemo /> */}
      <DemoUseMemoTab />
    </>
  )
}

export default App;
