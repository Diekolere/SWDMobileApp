import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import CreateAccount from './CreateAccount';
import VerifyEmail from './VerifyEmail';
import Home from './Home'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/verify" element={<VerifyEmail />} />
        <Route path="/home" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
