import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavigationBar from "./components/navigation";
import Footer from "./components/footer";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";


const App = () => {

    return (
        <BrowserRouter>
            <header>
                <NavigationBar />
            </header>
            <main id="page-container">
                <Routes>
                    <Route path="/" element={ <Landing /> } />
                    <Route path="/about" element={ <About /> } />
                    <Route path="/contact" element={ <Contact /> } />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
