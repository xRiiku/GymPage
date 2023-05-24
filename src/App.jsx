import AboutUs from './Pages/AboutUs.jsx';
import Home from './Pages/Home.jsx';
import Navbar from './Pages/Navbar.jsx';


import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function App() {
  return (
    <div className='bg-black h-[200vh]'>
      <Router>
        <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/home' element={ <Home /> } />
        <Route path='/aboutus' element={ <AboutUs /> } />
      </Routes>
    </Router>
    </div>
  );
}
