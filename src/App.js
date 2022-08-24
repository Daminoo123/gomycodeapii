import './App.css';
import {Routes,Route} from 'react-router-dom'
import Navbarr from './container/Navbarr'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Userlist from './container/Userlist';
import User from './pages/User';
function App() {
  return (
    <div className="App">
      
   <Navbarr/>
   <Routes>
    <Route default path='/' element={<Home/>}/>
    <Route path='/login' element ={<Login/>}/>
    <Route path='/users' element ={<Userlist/>}/>
    <Route path={'/profile/:id'} element ={<User/>}/>

   </Routes>
    </div>
  );
}

export default App;
