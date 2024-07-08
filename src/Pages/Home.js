import React from "react";
import Hero from "../Components/Hero"; // Assuming you have a Hero component
import Info from "../Components/Info"; // Assuming you have an Info component
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Reviews from "../Components/Reviews";
import Doctors from "../Components/Doctors";
import Footer from "../Components/Footer";
import "../Styles/Home.css"; // Assuming you have a Home.css file for styles
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      <Info />
      <About />
      <BookAppointment />
      <Reviews />
      <Doctors />
      <Footer />
    </div>
  );
}

export default Home;
