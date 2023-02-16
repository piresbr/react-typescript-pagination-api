import { useState } from "react";
import HomeView from "./views/HomeViews";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 style={{fontSize: '1.75rem', marginBottom: '2rem'}}>React + Typescript Api Pagination</h1>
      <BrowserRouter>
        <HomeView />
      </BrowserRouter>
    </div>
  );
}

export default App;
