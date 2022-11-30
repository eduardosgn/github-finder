import { motion as m, AnimatePresence } from 'framer-motion';

const Home = () => {
    const animProps = {
        initial: {
            opacity: 0,
            y: '-15px',
            transition: {
                duration: 0.5,
                ease: 'easeInOut',
            }
        },
        visible: {
            opacity: 1,
            y: '0',
            transition: {
                duration: 0.5,
                ease: 'easeInOut',
            }
        },
        exit: {
            opacity: 0,
            y: '-15px',
            transition: {
                duration: 0.5,
                ease: 'easeInOut',
            }
        }
    }

    return (
        <m.div
            initial='initial'
            animate='visible'
            variants={animProps}
            exit='exit'
        >
            <h1 className="text-6xl">Welcome</h1>
        </m.div>
    );
};

export default Home;