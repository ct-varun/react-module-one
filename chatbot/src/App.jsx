import { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/Footer/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="chatbot">
        <Header />
        <Footer />
      </div>
    </>
  );
}

export default App;
