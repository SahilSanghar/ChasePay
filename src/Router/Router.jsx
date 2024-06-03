import React from 'react'
import { Routes, Route } from "react-router-dom";
import CheckingAcc from '../Interactor/CheckingAcc';

const Router = () => {
return (
    <Routes>
        <Route path="/personal/checking" element={<CheckingAcc />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
)
}

export default Router