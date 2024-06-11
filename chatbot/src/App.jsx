import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="chatbot">
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
