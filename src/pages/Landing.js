import React from 'react';
import Navigation from "../components/Landing/Navigation";
import HeaderSection from "../components/Landing/HeaderSection";
import FeaturesSection from "../components/Landing/FeaturesSection";
import Footer from "../components/Landing/Footer";

const Landing = ({handleSignIn}) => (
    <>
        <Navigation handleSignIn={handleSignIn}/>
        <HeaderSection />
        <FeaturesSection />
        <Footer />
    </>
);

export default Landing;