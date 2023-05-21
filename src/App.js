import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavigationBar from "./components/navigation";
import Footer from "./components/footer";
import Landing from "./pages/Landing";
import About from "./pages/About";


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
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
