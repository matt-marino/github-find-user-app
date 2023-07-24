import { createContext, useState } from 'react';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const GithubProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [Loading, setLoading] = useState(true)

    const fetchUsers = async () => {
        const response = await fetch(`${GITHUB_URL}/users`)
        const data = await response.json()
        setUsers(data)
        setLoading(false)
    }

    return <GithubContext.Provider value={{ users, Loading, fetchUsers }}>{children}</GithubContext.Provider>
};

export default GithubContext;
