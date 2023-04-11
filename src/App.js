
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
   return (
      <div className="App">
           <Navbar />
           
        <Routes>
          <Route>
              <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </div>
    );
}

export default App;



