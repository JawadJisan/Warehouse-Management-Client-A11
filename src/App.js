import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footerr from './components/Footerr/Footerr';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Registration from './components/Registration/Registration';
import Inventory from './components/Inventory/Inventories'
import RequireAuth from './components/RequireAuth/RequireAuth';
import ManageInventories from './components/ManageInventories/ManageInventories';
import SingleInventory from './components/Inventory/SingleInventory';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='/inventory/:id' element={<RequireAuth>

          <SingleInventory></SingleInventory>
        </RequireAuth>}></Route>
        <Route path='/manageInventories' element={<RequireAuth>
          <ManageInventories></ManageInventories>
        </RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footerr></Footerr>
      
    </div>
  );
}

export default App;
