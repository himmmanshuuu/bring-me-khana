import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Caraousel from "../components/Caraousel";
export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Caraousel />
      </div>
      <div className = "m-3">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
      

      <div>
        <Footer></Footer>
      </div>
    </>
  );
}
