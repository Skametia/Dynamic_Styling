import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dynamic_Styling from "./Componant/Dynamic_Styling/Dynamic_Styling";
import Input_age from "./Componant/InputAge/Input_age";
import "bootstrap/dist/css/bootstrap.min.css";
import LogIn_form from "./Componant/Reusable_LoginForm/LoginForm";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dynamic_Styling />} />
          <Route path="/Input_age" element={<Input_age />} />
          <Route path="/LogIn_form" element={<LogIn_form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
