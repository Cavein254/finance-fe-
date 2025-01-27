import { useQuery } from "@apollo/client";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { GET_CURRENT_USER } from "../graphql/operations/query/user";
import { User } from "../__generated__/graphql";

interface UserContextType {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

const MyUserContext = createContext<UserContextType>({
  user: undefined,
  setUser: () => {},
});

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<undefined | User>(undefined);
  const { data, error } = useQuery(GET_CURRENT_USER);
  useEffect(() => {
    if (data && data?.getCurrentUser?.data) {
      setUser(data?.getCurrentUser?.data);
    } else if (error) {
      console.log(error);
      setUser(undefined);
    }
  }, [data, error]);
  return (
    <MyUserContext.Provider value={{ user, setUser }}>
      {children}
    </MyUserContext.Provider>
  );
};

export { MyUserContext, UserProvider };
