import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

function App() {
  return (
    <div className='bg-gray-900'>
      <div className='lg:mx-[500px] px-5 lg:px-20'>
        <Navbar></Navbar>
        <Profile></Profile>
        <Content></Content>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
