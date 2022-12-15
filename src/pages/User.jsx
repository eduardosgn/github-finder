import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa';
import { BeatLoader } from 'react-spinners';
import { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import { useParams, Link } from "react-router-dom";
import RepoList from '../components/repos/RepoList';
import { getUserAndRepos } from '../context/github/GithubActions';

import { motion as m } from 'framer-motion';

const User = () => {
    const { user, loading, repos, dispatch } = useContext(GithubContext);

    const params = useParams();

    useEffect(() => {
        dispatch({ type: 'SET_LOADING' });

        const getUserData = async () => {
            const userData = await getUserAndRepos(params.login);
            dispatch({ type: 'GET_USER_AND_REPOS', payload: userData });
        };

        getUserData();
    }, [dispatch, params.login]);

    if(loading) {
        return (
            <div className="flex items-center justify-center">
                <BeatLoader color='#36d7b7' size={15} />
            </div>
        )
    };

    const {
        name,
        type,
        avatar_url,
        location,
        bio,
        blog,
        twitter_username,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
    } = user;

    return (
        <m.div
            initial={{ opacity: 0, x: '-10px' }}
            animate={{ opacity: 1, x: '0px' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            exit={{ opacity: 0, x: '10px' }}
        >
            <section className="w-full mx-auto">
                <div className="mb-4">
                    <Link to='/' className='btn btn-ghost'>
                        Back to search
                    </Link>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
                    <div className="custom-card-image mb-6 md:mb-0">
                        <div className="rounded-lg shadow-xl card image-full">
                            <figure>
                                <img src={ avatar_url } alt={ login } />
                            </figure>

                            <div className="card-body justify-center">
                                <h2 className="card-title mb-0">
                                    { name }
                                </h2>

                                <p>{ login }</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span 2">
                        <div className="mb-6">
                            <h1 className="text-3xl card-title">
                                { name }
                                <div className="ml-2 mr-1 badge badge-success">
                                    { type }
                                </div>
                                { hireable && (
                                    <div className="mx-1 badge badge-info">
                                        Hireable
                                    </div>
                                )}
                            </h1>

                            <p>{ bio }</p>

                            <div className="mt-4 card-actions">
                                <a 
                                    href={ html_url } 
                                    target='_blank' 
                                    rel='noreferrer' 
                                    className='btn btn-outline'
                                >
                                    Visit Github Profile
                                </a>
                            </div>
                        </div>

                        <div className="w-full rounded-lg shadow-md bg-base-100 stats">
                            { location && (
                                <div className="stat">
                                    <div className="stat-title text-md">Location</div>
                                    <div className="text-lg stat-value">
                                        { location }
                                    </div>
                                </div>
                            )}
                            { blog && (
                                <div className="stat">
                                    <div className="stat-title text-md">Website</div>
                                    <div className="text-lg stat-value">
                                        <a 
                                            href={`htps://${blog}`} 
                                            target='_blank' 
                                            rel='noreferrer'
                                        >
                                            { blog }
                                        </a>
                                    </div>
                                </div>
                            )}
                            { twitter_username && (
                                <div className="stat">
                                    <div className="stat-title text-md">Twitter</div>
                                    <div className="text-lg stat-value">
                                        <a 
                                            href={`htps://twitter.com/${twitter_username}`} 
                                            target='_blank' 
                                            rel='noreferrer'
                                        >
                                            { twitter_username }
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
                <div className="stat">
                    <div className="stat-figure text-accent">
                        <FaUsers className='text-3xl md:text-5xl' />
                    </div>

                    <div className="stat-title pr-5">
                        Followers
                    </div>

                    <div className="stat-value pr-5 text-3xl md:text-4xl">
                        { followers }
                    </div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-accent">
                        <FaUserFriends className='text-3xl md:text-5xl' />
                    </div>

                    <div className="stat-title pr-5">
                        Following
                    </div>

                    <div className="stat-value pr-5 text-3xl md:text-4xl">
                        { following }
                    </div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-accent">
                        <FaCodepen className='text-3xl md:text-5xl' />
                    </div>

                    <div className="stat-title pr-5">
                        Public Repos
                    </div>

                    <div className="stat-value pr-5 text-3xl md:text-4xl">
                        { public_repos }
                    </div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-accent">
                        <FaStore className='text-3xl md:text-5xl' />
                    </div>

                    <div className="stat-title pr-5">
                        Public Gists
                    </div>

                    <div className="stat-value pr-5 text-3xl md:text-4xl">
                        { public_gists }
                    </div>
                </div>
            </section>
            
            <RepoList repos={ repos } />
        </m.div>
    );
};

export default User;
