import './App.css';
import {Routes, Route, NavLink} from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Dogs from './pages/Dogs'
import Products from './pages/Products'
import NoMatch from './pages/NoMatch'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='home'element={<Home />} />
          <Route path='courses'element={<Courses />} />
          <Route path='dogs' element={<Dogs />} />
          <Route path='products' element={<Products />} />
          <Route path='*' element={<NoMatch/>} /> 
        </Route>
      </Routes>
    </div>
  );
}

export default App;
