import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation";
import Home from "./routes/Home";
import Shop from "./routes/shop/Shop";
import Authentication from "./routes/auth/autentication";
import { Checkout } from "./routes/checkout/checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
