import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './LayOut/LayOut';

function App() {
  return (
    <BrowserRouter>
      <div className='AppDiv'>
        <Routes>

          <Route path='/' element={<Layout />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
