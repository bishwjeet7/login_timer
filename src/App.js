import './App.css';
import Home from './component/Home';
import SignIn from './component/SignIn';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/Home" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
      {/* <SignIn/> */}
    </>
  );
}

export default App;
