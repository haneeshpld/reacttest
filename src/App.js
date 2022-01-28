import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Todo from './components/Todo';
import Home from './Home';
function App() {
  return (
    <Router>
    <Routes>

    <Route exact path='/todo' element={< Todo />}></Route>
    <Route exact path='/' element={< Home />}></Route>

    {/* <Route exact path='/about' element={< About />}></Route>
    <Route exact path='/contact' element={< Contact />}></Route> */}

</Routes>
</Router>



  );
}

export default App;
