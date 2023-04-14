import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, ColorModeScript, useColorMode, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Header from "./components/Header";
import Home from "./components/Home";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import CoinDetails from "./components/CoinDetails";
import Footer from "./components/Footer";


function App() {
  
  return (
    <ChakraProvider>
      <ColorModeScript />
      
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
      </Routes>

      <Footer />
    </Router>
    </ChakraProvider>
  );
}


export default App;
