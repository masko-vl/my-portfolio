import React, { createContext, useContext, useState, ReactNode, PropsWithChildren, ReactElement } from 'react';

interface MyContextProps {
  children: ReactNode;
}

interface MyContextValues {
  myState: string;
  updateState: (newValue: string) => void;
}

const MyContext = createContext<MyContextValues | undefined>(undefined);

const MyContextProvider: React.FC<{ children: ReactNode }> = ({ children }): ReactElement => {
  const [myState, setMyState] = useState<string>('light');

  const updateState = (newValue: string) => {
    setMyState(newValue);
  };
  return React.createElement(MyContext.Provider, { value: { myState, updateState } }, children);
};

const useMyContext = (): MyContextValues => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};

export { MyContextProvider, useMyContext };