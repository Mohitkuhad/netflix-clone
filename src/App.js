import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoute";

//Importing Pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup1 from "./Pages/GetStarted/Signup1";
import Signup2 from "./Pages/GetStarted/Signup2";
import Signup3 from "./Pages/GetStarted/Signup3";
import Signup4 from "./Pages/GetStarted/Signup4";
import Payment from "./Pages/GetStarted/Payment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup/registration" element={<Signup1 />} />
        <Route path="/signup/regform" element={<Signup2 />} />
        <Route path="/signup" element={<Signup3 />} />
        <Route path="/signup/planform" element={<Signup4 />} />
        <Route path="/signup/payment" element={<Payment />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/browse" element={<h1>Browse</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
