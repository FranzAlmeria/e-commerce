import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.routes';
import Navigation from './routes/navigation/navigation.routes';
import Authentication from './routes/authentication/authentication.routes';
import Shop from './routes/shop/shop.routes';
import './App.css';


const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
