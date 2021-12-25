
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from './Component/Home/ProductDetails/ProductDetails';
import { Routes, Route} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import Login from './Component/Login/Login/Login';
import Register from './Component/Login/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Component/Login/PrivateRoute/PrivateRoute';
import AddProducts from './Component/Home/AddProducts/AddProducts';




function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/addproduct" element={<PrivateRoute><AddProducts/></PrivateRoute>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="product/:productId" element={<ProductDetails />} />
          <Route>page not found</Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
