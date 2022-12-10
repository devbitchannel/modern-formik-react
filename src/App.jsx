import { useState } from "react";
import "./App.css";
import { ContactUsForm } from "./components/widgets";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ContactUsForm />
    </div>
  );
}

export default App;
