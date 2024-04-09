import './App.css'
import {Outlet, Route, Routes} from "react-router-dom";
import NavBar from "./component/NavBar.jsx";
import Home from "./page/Home.jsx";
import Rules from "./page/Rules.jsx";
import Stats from "./page/Stats.jsx";
import CheckStat from "./page/CheckStat.jsx";

function App() {

    return (
        <main>
            <NavBar/>
            <Routes>
                <Route path={'/'} element={<Home />}>
                    <Route index element={<Rules />}/>
                    <Route path={'statistique'} element={<CheckStat />}/>
                </Route>
            </Routes>
        </main>
    )
}

export default App