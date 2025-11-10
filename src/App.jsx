import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <main style={{ minHeight: "80vh" }}>
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}

export default App;
