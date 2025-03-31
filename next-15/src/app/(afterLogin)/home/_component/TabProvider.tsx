'use client';
import { createContext, PropsWithChildren, useState } from 'react';
type Tab = 'fol' | 'rec';
export const TabContext = createContext<{
  tab: Tab;
  setTab: (value: Tab) => void;
}>({
  tab: 'fol',
  setTab: () => {},
});

export const TabProvider = ({ children }: PropsWithChildren) => {
  const [tab, setTab] = useState<Tab>('fol');
  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
};
