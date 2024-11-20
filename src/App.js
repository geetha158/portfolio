import './App.css';
import Footer from './components/Footer/Footer';
import Herosec from './components/Herosec/Herosec';
import Navbar from './components/Navbar/Navbar';
import { Route,Routes } from 'react-router-dom'
import Resume from './pages/Resume/Resume';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Herosec />}></Route>
        <Route path='/resume' element={<Resume />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
