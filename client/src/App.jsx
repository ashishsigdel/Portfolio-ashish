import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/education" element={<Portfolio />} />
        <Route path="/skills" element={<Portfolio />} />
        <Route path="/contact" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}
