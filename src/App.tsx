import Navbar from "./components/Navbar/Navbar";
import LandingPageMain from "./components/LandingPage/LandingPageMain";
import Login from "./components/Logging/Login";
import Register from "./components/Logging/Register";
import Logout from "./components/Logging/Logout";
import { Route, Routes } from "react-router-dom";


function App() {

  return (
      <>
          <Navbar/>
          <Routes>
              <Route path='/' element={<LandingPageMain/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/registration' element={<Register/>}/>
              <Route path='/logout' element={<Logout/>}/>
          </Routes>
      </>
  );
}

export default App;
