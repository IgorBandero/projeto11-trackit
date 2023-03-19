
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Provider } from "./components/Context"
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import TodayScreen from "./components/TodayScreen";
import MyHabits from "./components/MyHabits";
import HabitsDeck from "./components/HabitsDeck";
import HistoryHabits from "./components/HistoryHabits";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/cadastro" element={<SignupScreen />} />
          <Route path="/hoje" element={<TodayScreen />} />
          <Route path="/habitos" element={<MyHabits />} />
          <Route path="/historico" element={<HistoryHabits />} />
        </Routes>  
      </BrowserRouter>
    </Provider>    
  );
}

export default App;
