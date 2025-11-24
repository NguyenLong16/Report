import React from "react";

const Child = React.memo(({ onAdd }) => {
    console.log("Child render");
    return <button onClick={onAdd}>Add</button>;
});

export default Child
