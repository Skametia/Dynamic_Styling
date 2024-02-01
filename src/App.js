import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dynamic_Styling from "./Componant/Dynamic_Styling/Dynamic_Styling";
import Input_age from "./Componant/InputAge/Input_age";
import Disable_Button from "./Componant/Disable_button/Disable_Button";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dynamic_Styling />} />
          <Route path="/Input_age" element={<Input_age />} />
          <Route path="/Disable_Button" element={<Disable_Button />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
