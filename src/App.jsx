import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import LatexGenerator from "./pages/LatexGenerator";
import { Box } from "@mui/material";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Features />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analyze" element={<ResumeAnalyzer />} />
          <Route path="/latex" element={<LatexGenerator />} />
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
