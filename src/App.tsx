import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Home } from "./pages/Home";
import { User } from "./pages/User";

import "./styles/global.scss"

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/user" element={ <User /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

