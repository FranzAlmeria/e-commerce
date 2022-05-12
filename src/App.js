import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.routes';
import Navigation from './routes/navigation/navigation.routes';
import Authentication from './routes/authentication/authentication.routes';
import Shop from './routes/shop/shop.routes';
import './App.css';
import Checkout from './routes/checkout/checkout.routes';



const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
