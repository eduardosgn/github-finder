import AnimatedRoute from "./components/AnimatedRoute";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import { GithubProvider } from "./context/github/GithubContext";

function App() {
    return (
        <GithubProvider>
            <div className="flex flex-col justify-between h-screen">

                <Navbar title='Github Finder' />

                <main className="container mx-auto px-3 pb-12" >
                    <AnimatedRoute />
                </main>

                <Footer />

            </div>
        </GithubProvider>
    );
};

export default App;
