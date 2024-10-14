import React from "react";
import Navbar from "../pages/Navbar"; // Your Navbar component
import FeatureSection from "../pages/Feature"; // Your FeatureSection component
import CollectionSection from "../pages/Collection"; // Your CollectionSection component
import Services from "../pages/Services"; // Your Services component
import ContactPage from "../pages/ContactPage"; // Your ContactPage component
import Award from "../pages/Award"; // Your Award component
import Footer from "../pages/Footer"; // Your Footer component

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <FeatureSection />
      <CollectionSection />
      <Services />
      <ContactPage />
      <Award />
      <Footer />
    </div>
  );
};

export default MainLayout;
