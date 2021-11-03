import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

interface IDataContext {
  journals: Array<object>;
  setJournals: Dispatch<SetStateAction<never[]>>;
  journalName: string | undefined;
  setJournalName: Dispatch<SetStateAction<any>>;
  entries: Array<object>;
  setEntries: Dispatch<SetStateAction<never[]>>;
  // entry: {
  //   title: any;
  //   content: any;
  // };
  // setEntry: Dispatch<SetStateAction<never[]>>;
}

export const DataContext = createContext<IDataContext>({
  journals: [],
  setJournals: () => {},
  journalName: '',
  setJournalName: () => {},
  entries: [],
  setEntries: () => {},
  // entry: {
  //   title: '',
  //   content: '',
  // },
  // setEntry: () => {},
});

export function DataProvider({ children }: any) {
  const [journals, setJournals] = useState([]);
  const [journalName, setJournalName] = useState();
  const [entries, setEntries] = useState([]);
  // const [entry, setEntry] = useState();

  // useEffect(() => {

  // }, [journals]);

  return (
    <DataContext.Provider
      value={{
        journals,
        setJournals,
        journalName,
        setJournalName,
        entries,
        setEntries,
        // entry,
        // setEntry,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
