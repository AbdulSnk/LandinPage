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
    <div>
      {!clicked ? (
        <Home setClicked={setClicked} clicked={clicked} />
      ) : (
        <div>
          <section id="home">
            <Navbar setClicked={setClicked} clicked={clicked} />
          </section>
          <section id="features">
            <FeatureSection />
          </section>
          <section id="collections">
            <CollectionSection />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="contact">
            <ContactPage />
          </section>
          <section id="awards">
            <Award />
          </section>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
