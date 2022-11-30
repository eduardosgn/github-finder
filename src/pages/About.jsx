import { motion as m } from 'framer-motion';

const About = () => {
    return (
        <m.div
            initial={{ opacity: 0, y: '15px' }}
            animate={{ opacity: 1, y: '0px' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            exit={{ opacity: 0, y: '15px' }}
        >
            <h1 className="text-6xl mb-4">Github Finder</h1>
            <p className='mb-4 text-2xl font-light'>
                A React app to search GitHub profiles and see profile details. This
                project is part of the
                <a href='https://www.udemy.com/course/modern-react-front-to-back/'>
                    {' '}
                    React Front To Back
                </a>
                {' '}
                Udemy course by<strong><a href='https://traversymedia.com'> Brad Traversy</a></strong>.
            </p>
            <p className='text-lg text-gray-400'>
                Front-end coded By: <a className='text-white' href='https://github.com/eduardosgn'>Eduardo Nascimento</a>
            </p>
        </m.div>
    );
}

export default About;