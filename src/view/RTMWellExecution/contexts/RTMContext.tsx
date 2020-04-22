import React, { useState, useContext } from 'react';

// Glogal state for RTM App
type RTMContextProps = {
  decisionBoxContent: string;
  setDecisionBoxContent: (value: React.SetStateAction<string>) => any;
  inputsForm: JSX.Element;
  showInputForm: boolean | undefined;
  setShowInputForm: (value: React.SetStateAction<boolean>) => any;
};

// const setDecisionBoxContent: (value: React.SetStateAction<string>) => void

// Init context and set default props
const RTMContext = React.createContext<Partial<RTMContextProps>>({});
export const useRTMContext = () => useContext(RTMContext);

interface Props {
  children: React.ReactNode;
}

// Create RTM Context provider
export const RTMContextProvider: React.FC<Props> = ({ children }) => {
  // Initial State
  const initialDecisionBoxContent =
    'Click the pipe tally generator app below to generate a set of pipe tallies and their associated risk for your well depth and pressure, or select another available app.';

  const [decisionBoxContent, setDecisionBoxContent] = useState(
    initialDecisionBoxContent
  );

  const [showInputForm, setShowInputForm] = useState(false);

  return (
    <RTMContext.Provider
      value={{
        decisionBoxContent,
        setDecisionBoxContent: (...p) => setDecisionBoxContent(...p),
        showInputForm,
        setShowInputForm: (...p) => setShowInputForm(...p),
      }}
    >
      {children}
    </RTMContext.Provider>
  );
};
