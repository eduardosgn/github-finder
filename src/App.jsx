import AnimatedRoute from "./components/AnimatedRoute";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Alert from "./components/layout/Alert";

import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";

function App() {
    return (
        <GithubProvider>
            <AlertProvider>
                <div className="flex flex-col justify-between h-screen">

                    <Navbar title='Github Finder' />

                    <main className="container mx-auto px-3 pb-12" >
                        <Alert />
                        <AnimatedRoute />
                    </main>

                    <Footer />

                </div>
            </AlertProvider>
        </GithubProvider>
    );
};

export default App;
