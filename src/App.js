
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/cadastro" element={<SignupScreen />} />
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
