import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './app/pages/Home';
import AboutUs from './app/pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about-us' element={<AboutUs />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
