import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import Navbar from './components/Navbar';
import {
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <main className="w-full min-h-[210px] bg-gradient-to-b from-blue-200 via-blue-400 to-white">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/About' element={<About />} />
          <Route path='/Menu' element={<MenuPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
