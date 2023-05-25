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
        <Route path='/' element={ <Home /> } />
        <Route path='/home' element={ <Home /> } />
        <Route path='/aboutus' element={ <AboutUs /> } />
        <Route path='/classes' element={ <Classes /> } />
        <Route path='/ourteam' element={ <OurTeam /> } />
        <Route path='/contact' element={ <Contact /> } />
      </Routes>
    </Router>
    </div>
  );
}
