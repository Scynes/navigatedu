import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/navigation";
import Footer from "./components/footer";


const App = () => {

    return (
        <BrowserRouter>
            <header>
                <NavigationBar />
            </header>
            <main id="page-container">
                <Routes>
                    <Route>

                    </Route>
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
