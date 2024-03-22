import React from "react";
import { Route, Routes } from "react-router";
import Actualite from "../../pages/Actualite";
import Emploi from "../../pages/Emploi";
import Evenement from "../../pages/Evenement"
import Avis from "../../pages/Avis"
import Bibliotheque from "../../pages/Bibliotheque"
import Forms from "../../pages/Forms"
import Note from "../../pages/Note"
import ListeGroup from "../../pages/ListeGroup"




const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Actualite />}></Route>
      <Route path="/emploi" element={<Emploi />}></Route>
      <Route path="/evenments" element={<Evenement />}></Route>
      <Route path="/groupe" element={<ListeGroup />}></Route>
      <Route path="/note" element={<Note />}></Route>
      <Route path="/bibliotheque" element={<Bibliotheque />}></Route>
      <Route path="/forms" element={<Forms />}></Route>
      <Route path="/avis" element={<Avis />}></Route>
    </Routes>
  );
};

export default AppRoute;
