import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Contents from './components/Contents';
import Order from './components/Order';

function App() {
  return (
    <>
      <Header/>
      <div className='flex'>
          <div className='w-4/6'><Contents/></div>
          <div className='w-2/6'><Order/></div>
      </div>
    </>
  );
}

export default App;
