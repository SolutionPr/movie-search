import { BrowserRouter } from "react-router-dom";
import Routs from "./router/Routs";
import "./styles/main.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routs />
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={2400} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
}

export default App;
