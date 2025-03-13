import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./Pages/Home/Home";
import Quran from "./Pages/Quran";
import PrayerTimes from "./Pages/Prayer/PrayerTimes";
import Zakat from "./Pages/zakat/Zakat";
import Sunan from "./Pages/sunan/Sunan";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quran" element={<Quran />} />
        <Route path="/prayer-times" element={<PrayerTimes />} />
        <Route path="/zakat" element={<Zakat />} />
        <Route path="/sunan" element={<Sunan />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;


