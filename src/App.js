import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavigationBar from "./components/navigation";
import Footer from "./components/footer";
import Landing from "./pages/Landing";


const App = () => {

    return (
        <BrowserRouter>
            <header>
                <NavigationBar />
            </header>
            <main id="page-container">
                <Routes>
                    <Route path="/" element={ <Landing /> } />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
