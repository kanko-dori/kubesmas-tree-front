import liff from '@line/liff';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { myLiffId, dummyIcon } from "./constants";

liff.init({ liffId: myLiffId }).catch(console.error);

type LiffInfoContextValue = {
  loggedIn: boolean;
  name: string;
  image: string;
}

const LiffInfoContext = createContext<LiffInfoContextValue>({
  loggedIn: false,
  name: '',
  image: dummyIcon,
});

export const LiffInfoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(liff.isLoggedIn());
  const [name, setName] = useState('');
  const [image, setImage] = useState(dummyIcon);
  useEffect(() => {
    if (loggedIn) {
      liff.getProfile().then((prof) => {
        setName(prof.displayName);
        setImage(prof.pictureUrl ?? dummyIcon);
      });
    } else if (process.env.NODE_ENV !== 'development') {
      liff.login();
      setTimeout(() => setLoggedIn(liff.isLoggedIn()), 10*1000);
    }
  }, [loggedIn]);

  return (
    <LiffInfoContext.Provider value={{ loggedIn, name, image }}>
      { children }
    </LiffInfoContext.Provider>
  )
};

export const useLiffInfo = (): LiffInfoContextValue => {
  return useContext(LiffInfoContext)
};