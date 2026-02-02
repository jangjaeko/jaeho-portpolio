import "./App.css";
import { Route } from "react-router-dom";
import Home from "./pages/home";
import Experiences from "./pages/experiences";
import Header from "./components/Header";
import { Routes } from "react-router";
import NotFound from "./pages/notFound";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div style={{ position: "fixed", width: "100%", top: 0, zIndex: 100 }}>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiences/:id" element={<Experiences />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
