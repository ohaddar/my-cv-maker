import { Route, Routes } from "react-router-dom";
import PrincipalPage from "./components /PrincipalPage";
import PersonalExp from "./components /PersonalExp";
import SignUp from "./components /SignUp";
import PersonalData from "./components /PersonalData";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PrincipalPage />}></Route>
      <Route path="/SignUp" element={<SignUp />}></Route>
      <Route path="/PersonalData" element={<PersonalData />}></Route>
      <Route path="/PersonalExp" element={<PersonalExp />}></Route>
    </Routes>
  );
}

export default App;
