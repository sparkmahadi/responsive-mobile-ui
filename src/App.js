import './App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

function App() {
  return (
    <div className='lg:mx-[500px] px-5 lg:px-20 bg-gray-900'>
        <Navbar></Navbar>
        <Profile></Profile>
        <Content></Content>
    </div>
  );
}

export default App;
