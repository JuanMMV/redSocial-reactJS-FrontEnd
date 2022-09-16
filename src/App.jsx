import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./routes/HomeScreen";
import LoginScreen from "./routes/LoginScreen";
import ProfileScreen from "./routes/ProfileScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/:userName/status/:idpost/image/:index" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
