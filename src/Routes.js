import React from "react";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import Header from "./components/layout/Header";
import { Home, Processes, QualityControl } from "./components/pages";
import Reports from "./components/Reports";

const AppRoutes = ()=>{
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/processes" element={<Processes />} />
                <Route path="/quality-control" element={<QualityControl />} />
                <Route path="/report" element={<Reports />} />
                <Route path="/report2" element={<Reports />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;