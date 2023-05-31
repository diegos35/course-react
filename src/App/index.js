import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";

/* Create custom Hooks */

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
