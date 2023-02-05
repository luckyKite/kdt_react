import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Coffee from './components/pages/Coffee';
import Login from './components/pages/Login';
import Main from './components/pages/Main';
import Menu from './components/pages/Menu';
import Store from './components/pages/Store';
import StoreSearch from './components/pages/StoreSearch';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/coffee" element={<Coffee/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/store" element={<Store/>} />
        <Route path="/store-search" element={<StoreSearch/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
