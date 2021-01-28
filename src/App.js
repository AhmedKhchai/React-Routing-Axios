// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Blog from "./containers/Blog/Blog";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Blog />
      </div>
    </BrowserRouter>
  );
}

export default App;
