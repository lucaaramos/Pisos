import React from "react";
import Contacto from "../components/contact";
import Testimonios from "../components/testimonial";
import InstagramFeed from "../components/instagramFeed";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Benefitis from "../components/benefits"
import Hero from "../components/hero";
import Products from "../components/products";
import About from "../components/about";



const Home = () => {
  return (
    <>
    {/* <Navbar /> */}
    <Hero />
    < About/>
    <Products /> {/* Aqui quiero que vaya el boton de volver atras*/}
    <Benefitis />
      <Contacto />
      <Testimonios />
      <InstagramFeed />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
