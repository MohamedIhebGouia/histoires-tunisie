import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Catalog from "./components/Catalog";
import Detail from "./components/Detail";
import About from "./components/About"; // nouveau composant À propos

/*
  App : structure principale de l'application.
  Routes :
    /         -> Catalogue (Accueil)
    /story/:id-> Détail d'une histoire
    /about    -> Page À propos (nouveau composant)
*/
export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-fill">
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/story/:id" element={<Detail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}