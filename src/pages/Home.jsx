import { motion as m } from 'framer-motion';

import UserResults from '../components/users/UserResults';
import UserSearch from '../components/users/UserSearch';

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
            <UserSearch />
            <UserResults />
        </m.div>
    );
};

export default Home;