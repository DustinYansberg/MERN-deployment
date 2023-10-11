import "./App.css";
import { Navigate, Routes, Route } from "react-router-dom";
import Main from "./views/Main";
import NewPet from "./views/NewPet";
import EditPet from "./views/EditPet";
import DetailPet from "./views/DetailPet";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/pets" />} />
        <Route path="/pets" element={<Main />} />
        <Route path="/pets/new" element={<NewPet />} />
        <Route path="/pets/:id" element={<DetailPet />} />
        <Route path="/pets/:id/edit" element={<EditPet />} />
      </Routes>
    </div>
  );
}

export default App;
