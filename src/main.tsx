import React from 'react'
import ReactDOM from 'react-dom/client'
import App, {AboutUsPage, LoginPage, HistoryPage} from './App.tsx'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AdminDashboard from "./components/Dashboard/AdminDashboard.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<App />} />
                <Route path={"/main-page"} element={<App />} />
                <Route path={"/about-us"} element={<AboutUsPage />} />
                <Route path={"/login"} element={<LoginPage />} />
                <Route path={"/history"} element={<HistoryPage userId="someUserId" />} />
                <Route path={"/profile"} element={<AdminDashboard />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)