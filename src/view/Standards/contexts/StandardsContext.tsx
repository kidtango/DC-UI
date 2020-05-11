import React, { useContext, useState } from 'react';

// Glogal state for RTM App
type StandardsContextProps = {
  decisionBoxContent: string;
  setDecisionBoxContent: (value: React.SetStateAction<string>) => any;
  inputsForm: JSX.Element;
  showInputForm: boolean | undefined;
  setShowInputForm: (value: React.SetStateAction<boolean>) => any;

  slurrySpacerState: {
    isError: boolean;
    isDisabled: boolean;
    isActive: boolean;
  };
  setSlurrySpacerState: (
    value: React.SetStateAction<{
      isError: boolean;
      isDisabled: boolean;
      isActive: boolean;
    }>
  ) => any;
};

// Initial State for DecisionBox's prompt
const initialDecisionBoxContent =
  'Select apps below to check if it advisable to drill a well';

// Init context and set default props
const StandardsContext = React.createContext<Partial<StandardsContextProps>>(
  {}
);
export const useStandardsContext = () => useContext(StandardsContext);

interface Props {
  children: React.ReactNode;
}

const StandardsContextProvider: React.FC<Props> = ({ children }) => {
  const [decisionBoxContent, setDecisionBoxContent] = useState(
    initialDecisionBoxContent
  );

  const [slurrySpacerState, setSlurrySpacerState] = useState({
    isError: false,
    isDisabled: false,
    isActive: false,
  });

  return (
    <StandardsContext.Provider
      value={{
        decisionBoxContent,
        setDecisionBoxContent: (...p) => setDecisionBoxContent(...p),
        slurrySpacerState,
        setSlurrySpacerState: (...p) => setSlurrySpacerState(...p),
      }}>
      {children}
    </StandardsContext.Provider>
  );
};

export default StandardsContextProvider;
