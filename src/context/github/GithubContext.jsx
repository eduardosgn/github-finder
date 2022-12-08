import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_API_URL = import.meta.env.VITE_GITHUB_API_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        loading: true
    };

    const [state, dispatch] = useReducer(githubReducer, initialState);

    const fetchUsers = async () => {
        const response = await fetch(`${GITHUB_API_URL}/users`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        });

        const data = await response.json();

        dispatch({
            type: 'GET_USERS',
            payload: data,
        })
    };

    return (
        <GithubContext.Provider
            value={{
                state: state.users,
                loading: state.loading,
                fetchUsers
            }}
        >
            { children }
        </GithubContext.Provider>
    );
};

export default GithubContext;