import { createContext, useState } from 'react';

export const Context = createContext();

export const Provider = ({ children }) => {
  
  const [userInfo, setUserInfo] = useState([]);
  const [totalHabits, setTotalHabits] = useState(undefined);

  return (
    <Context.Provider value={{ userInfo, setUserInfo }} >
      {children}
    </Context.Provider>
  );

};