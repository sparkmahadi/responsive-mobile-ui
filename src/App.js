import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

function App() {
  return (
    <div className='bg-gray-900 font-tertiary'>
      <div className='max-w-2xl mx-auto px-5 md:px-0'>
        <Navbar></Navbar>
        <Profile></Profile>
        <Content></Content>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
