import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import FeatureSection from "./pages/Feature";
import CollectionSection from "./pages/Collection";
import Services from "./pages/Services";
import ContactPage from "./pages/ContactPage";
import Award from "./pages/Award";
import Footer from "./pages/Footer";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [clicked, setClicked] = useState(true);
  return (
    <Router>
      {!clicked ? (
        <Home setClicked={setClicked} clicked={clicked} />
      ) : (
        <div>
          <Navbar setClicked={setClicked} clicked={clicked} />
          <FeatureSection />
          <CollectionSection />
          <Services />
          <ContactPage />
          <Award />
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
