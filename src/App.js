import logo from './logo.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import Intro from './components/intro/Intro';
import About from './components/about/About';
import ProductList from './components/productList/ProductList';
import Contact from './components/contact/contact';
import Toggle from './components/toggle/Toggle';
import { ThemeContext } from './context';
import { useContext } from 'react';
import { ToastContainer } from 'react-toastify';

function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

    return (
      <div 
        style={{
          backgroundColor: darkMode ? '#222' : 'white', 
          color: darkMode && 'white',
        }}
      >
        <ToastContainer />
        <Toggle />
        <Intro />
        <About />
        <ProductList />
        <Contact />
      </div>
    )
};

export default App;
