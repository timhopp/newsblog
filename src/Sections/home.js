import React from "react";
import { TrendingHome, WorldNewsHome } from "../components/SectionHome";
import Footer from "../components/footer";
import "../App.css";

export default function Home() {
  return (
    <section>
      {/* <header className="App-header"></header> */}
      <TrendingHome />
      <WorldNewsHome />
      <Footer />
    </section>
  );
}
