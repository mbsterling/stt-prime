import logo from './logo.svg';
import './App.css';
import './styles/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";


//Code for App were taken from here.
//https://supertokens.com/blog/building-a-login-screen-with-react-and-bootstrap

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
