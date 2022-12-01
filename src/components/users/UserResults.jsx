import { useEffect, useContext } from "react";
import { PacmanLoader } from "react-spinners";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";

const UserResults = () => {
    const { users, loading, fetchUsers } = useContext(GithubContext);

    useEffect(() => {
        fetchUsers();
    }, []);

    if(!loading) {
        return (
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                {users.map((user) => (
                    <UserItem key={ user.key } user={ user } />
                ))}
            </div>
        );
    } else {
        return (
            <PacmanLoader color="#36d7b7" size={35} />
        );
    };
};

export default UserResults;