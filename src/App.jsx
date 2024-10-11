import Navbar from "./components/pages/Navbar";
import FeatureSection from "./components/pages/Feature";
import CollectionSection from "./components/pages/Collection";
import Services from "./components/pages/Services";
import ContactPage from "./components/pages/ContactPage";
import Award from "./components/pages/Award";
import Footer from "./components/pages/Footer";
import { useState } from "react";
import Home from "./components/pages/Home";

function App() {
  const [clicked, setClicked] = useState(true);
  return (
    <>
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
    </>
  );
}

export default App;
