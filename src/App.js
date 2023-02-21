import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './components/Navbar1';
import {Banner} from './components/Banportfiles';
import {Skills} from'./components/Skill1';
import {Projects} from './components/Project2';
import {Contact} from './components/ContactUs';
import { Footer } from './components/Footer1';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact />
      <Footer/>
    </div>
  );
}
export default App;
