import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footerr from './components/Footerr/Footerr';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Registration from './components/Registration/Registration';
import Inventory from './components/Inventory/Inventory'
import RequireAuth from './components/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='/inventory' element={<RequireAuth>
          <Inventory></Inventory>
        </RequireAuth>}></Route>
      </Routes>

      <Footerr></Footerr>
      
    </div>
  );
}

export default App;
