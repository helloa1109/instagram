import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './LayOut/LayOut';
import Login from './Login/Login';
import Mypage from './Mypage/Mypage';
import Chat from './Chat/Chat';
import SignUp from './SignUp/SignUp';

function App() {
  
  return (
    <BrowserRouter>
      <div className='AppDiv'>
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/mypage' element={<Mypage/>}/>
          <Route path='/chat' element={<Chat/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
