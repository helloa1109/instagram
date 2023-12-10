import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './LayOut/LayOut';
import Login from './Login/Login';
import Mypage from './Mypage/Mypage';
import Chat from './Chat/Chat';
import SignUp from './SignUp/SignUp';
import Bottom from './BottomMenu/Bottom';
import { useRecoilValue } from 'recoil';
import { LoginState } from './Recoil/LoginAtom';

function App() {

  const LoginStatus = useRecoilValue(LoginState);
  console.log(LoginStatus);
  return (

    <BrowserRouter>
      <div className='AppDiv'>
        <Routes>
          <Route path='/' element={<Login />} />

          {LoginStatus && (
            <>
              <Route path='/main' element={<Layout />} />
              <Route path='/mypage' element={<Mypage />} />
              <Route path='/chat' element={<Chat />} />
              <Route path='/signup' element={<SignUp />} />
            </>
          )}

          <Route path="/*" element={
            <h1 style={{ width: "100%", textAlign: "center", marginTop: "25%",display: "flex", justifyContent:'center' }}>페이지가 없습니다</h1>
          } />
        </Routes>
      </div>
      <Bottom />
    </BrowserRouter>
  );
}

export default App;
