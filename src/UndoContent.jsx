import { createContext, useContext } from 'react';
import useUndo from 'use-undo';

const UndoContext = createContext(null);

export const UndoProvider = ({ children }) => {
  const [history, { set, undo, redo }] = useUndo({
    tab: 'Security',
    panelTab: 'Security',
  });

  return (
    <UndoContext.Provider value={{ state: history.present, set, undo, redo }}>
      {children}
    </UndoContext.Provider>
  );
};

export const useUndoState = () => useContext(UndoContext);
