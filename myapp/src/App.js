import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Booking from "./Booking";
import Menu from "./Menu";
import Services from "./Services";
import Contact from "./Contact";
import PageNotFound from "./PageNotFound";
import Sign from "./Sign";
import SignUp from "./SignUp";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header />}>
            {/* Home */}
            <Route index element={<Home />} />
            {/* about */}
            <Route path="/about" element={<About />} />
            {/* service */}
            <Route path="/service" element={<Services />} />
            {/* menu */}
            <Route path="/menu" element={<Menu />} />
            {/* booking */}
            <Route path="/book" element={<Booking />} />
            {/* contact */}
            <Route path="/contact" element={<Contact />} />
            {/* sign up */}
            <Route path="/Signup" element={<SignUp />} />
            {/* fallback routing */}
            <Route path="*" element={<PageNotFound />} />
          </Route>
           {/* sign in */}
           <Route path="/sign" element={<Sign />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
