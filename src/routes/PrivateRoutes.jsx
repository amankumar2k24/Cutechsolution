import { Routes, Route } from "react-router-dom";

import  {Home}  from "../pages/Home";
// import Other  from "../pages/Other";
export const Router = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            {/* <Route path="/other" element={<Other />} /> */}
        </Routes>
    );
};

