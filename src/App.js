import MainComponent from './components/MainComponent';
import ChartComponent from './components/ChartComponent';
import FilesComponent from './components/FilesComponent';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import CoursesComponent from './components/CoursesComponent';
import SearchComponent from './components/SearchComponent';
import ListComponent from './components/ListComponent';
import Meals from './components/Meals';
import Calculator from './components/Calculator';
import { Navbar } from './components/Navbar';
import { Shop } from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import { ShopContextProvider } from './providers/ShopContextProvider';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" index element={<MainComponent />} />
          <Route path="/chart" element={<ChartComponent />} />
          <Route path="/file" element={<FilesComponent />} />
          <Route path="/courses" element={<CoursesComponent />}>
            <Route path="search" element={<SearchComponent />} />
            <Route path="list" element={<ListComponent />} />
          </Route>
          <Route path='/meals' element={<Meals />} />
          <Route path='/calc' element={<Calculator />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
