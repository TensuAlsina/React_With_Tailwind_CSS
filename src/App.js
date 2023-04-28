import Navbar from "./ui/components/Navbar";
import Home from "./ui/views/home/Home";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
 
function App() {
 
  return (
   <div>
    <Router>
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path="/"/>
      </Routes>
    </Router>
   </div>
  );
}

export default App;
