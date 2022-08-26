
import './App.css';
import {
  Route,
  Routes
} from "react-router";
import Home from './component/Home';
import About from './component/About';
import Header from './component/Header';
import NotFound from './component/NotFound/NotFound';

function App() {
  return ( 
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='*' element={<NotFound />} />
      </Routes>
      
    </div>
  );
}
 
export default App;
