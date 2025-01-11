import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import ReactDOM from "react-dom/client";
import './index.css'
import Main from './components/Layout/Main.jsx'
import Home from './components/Home/Home/Home.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}>
      <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
