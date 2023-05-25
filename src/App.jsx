import Classes from './Pages/Classes.jsx';
import OurTeam from './Pages/OurTeam.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import Home from './Pages/Home.jsx';
import Navbar from './Pages/Navbar.jsx';


import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from './Pages/Contact.jsx';

export default function App() {
  return (
    <div className='bg-black h-[200vh]'>
      <Router>
        <Navbar />
      <Routes>
        <Route path='/GymPage/index.html' element={ <Home /> } />
        <Route path='/GymPage/home' element={ <Home /> } />
        <Route path='/GymPage/aboutus' element={ <AboutUs /> } />
        <Route path='/GymPage/classes' element={ <Classes /> } />
        <Route path='/GymPage/ourteam' element={ <OurTeam /> } />
        <Route path='/GymPage/contact' element={ <Contact /> } />
      </Routes>
    </Router>
    </div>
  );
}
