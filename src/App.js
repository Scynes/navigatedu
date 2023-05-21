import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/navigation";


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
            <footer>

            </footer>
        </BrowserRouter>
    );
}

export default App;
