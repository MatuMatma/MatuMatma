import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, Login, Signup, About, Contact } from '../components';

const Routers: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={"home"} />} />
            <Route path={"home"} element={<Home />} />
            <Route path={"about"} element={<About />} />
            <Route path={"contact"} element={<Contact />} />
            <Route path={"login"} element={<Login />} />
            <Route path={"signup"} element={<Signup />} />
            <Route path="/*" element={<Navigate to={"home"} />} />
        </Routes>
    );
};

export default Routers;