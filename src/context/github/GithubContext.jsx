import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_API_URL="https://api.github.com";
const GITHUB_TOKEN="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";

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