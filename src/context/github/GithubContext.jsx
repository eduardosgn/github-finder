import { createContext, useState } from "react";

const GithubContext = createContext();

const GITHUB_API_URL="https://api.github.com";
const GITHUB_TOKEN="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";

export const GithubProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        // const response = await fetch(`${process.env.REACT_APP_GITHUB_API_URL}/users`, {
        //     headers: {
        //         Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
        //     }
        // });
        const response = await fetch(`${GITHUB_API_URL}/users`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        });

        const data = await response.json();

        setUsers(data);
        setLoading(false);
    };

    return (
        <GithubContext.Provider
            value={{
                users,
                loading,
                fetchUsers
            }}
        >
            { children }
        </GithubContext.Provider>
    );
};

export default GithubContext;