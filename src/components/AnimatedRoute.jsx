import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';

import { AnimatePresence } from "framer-motion";
import { useLocation, Routes, Route } from "react-router-dom";

const AnimatedRoute = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode={ 'wait' }>
            <Routes location={ location } key={ location.pathname }>
                <Route path="/" element={ <Home /> }/>
                <Route path="/about" element={ <About /> }/>
                <Route path="/notFound" element={ <NotFound /> }/>
                <Route path="/*" element={ <NotFound /> }/>
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoute;