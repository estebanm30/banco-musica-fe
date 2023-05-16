import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import MainPage from "./pages/MainPage/MainPage";
import LogInForm from "./pages/logIn/logInForm";
import Register from "./pages/register/register";
import CreateSong from "./pages/createSong/createSong";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="logInForm" element={<LogInForm />} />
          <Route path="register" element={<Register />} />
          <Route path="createSong" element={<CreateSong />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
