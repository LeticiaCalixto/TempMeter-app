import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "../pages/home/home";

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
