import React from "react";
import { TrendingPage } from "../components/TrendingPage";
import Footer from "../components/footer";
import "../App.css";

export default function Home() {
  return (
    <section>
      {/* <header className="App-header"></header> */}
      <TrendingPage />
      <Footer />
    </section>
  );
}
