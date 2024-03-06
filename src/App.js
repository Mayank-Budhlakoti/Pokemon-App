import logo from './logo.svg';
import React from "react";
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Details from './components/Details';
import AppContextProvider from './context/AppContext';

export default function App() {
  return (
    <Router>
      <AppContextProvider>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/details">Details</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/details" element={<Details/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </AppContextProvider>
    </Router>
  );
} 

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
