import React from "react";
import { TrendingHome, WorldNewsHome } from "../components/TrendingHome";
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
