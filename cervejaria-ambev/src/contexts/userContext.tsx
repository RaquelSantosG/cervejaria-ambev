import { createContext, ReactNode, useState } from "react";

interface UserContextModel {
    userName: string;
    setUserName: Function;
    reset: Function;
};

export const UserContext = createContext({} as UserContextModel);

interface UserContextProviderModel {
    children: ReactNode;
};

export const UserContextProvider = ({ children }: UserContextProviderModel) => {
    const [userName, setUserName] = useState<string>("");

    const reset = () => {
        setUserName("");
    };

    return (
        <UserContext.Provider
            value={{
                userName,
                setUserName,
                reset
            }}>
            {children}
        </UserContext.Provider>

    )
}