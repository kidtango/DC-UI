import React, { useState, useContext } from 'react';

// Glogal state for RTM App
type RiskContextsProps = {
  decisionBoxContent: string;
  setDecisionBoxContent: (value: React.SetStateAction<string>) => any;
  inputsForm: JSX.Element;
  showInputForm: boolean | undefined;
  setShowInputForm: (value: React.SetStateAction<boolean>) => any;

  riskProfileBuilderState: {
    isError: boolean;
    isDisabled: boolean;
    isActive: boolean;
  };
  setRiskProfileBuilderState: (
    value: React.SetStateAction<{
      isError: boolean;
      isDisabled: boolean;
      isActive: boolean;
    }>
  ) => any;
};

// const setDecisionBoxContent: (value: React.SetStateAction<string>) => void

// Init context and set default props
const RiskContexts = React.createContext<Partial<RiskContextsProps>>({});
export const useRiskContexts = () => useContext(RiskContexts);

// Initial State for DecisionBox's prompt
const initialDecisionBoxContent = 'Select an app below to assess your risk.';

interface Props {
  children: React.ReactNode;
}

// Create RTM Context provider
export const RiskContextsProvider: React.FC<Props> = ({ children }) => {
  const [decisionBoxContent, setDecisionBoxContent] = useState(
    initialDecisionBoxContent
  );

  const [showInputForm, setShowInputForm] = useState(false);

  const [riskProfileBuilderState, setRiskProfileBuilderState] = useState({
    isError: false,
    isDisabled: false,
    isActive: false,
  });

  return (
    <RiskContexts.Provider
      value={{
        decisionBoxContent,
        setDecisionBoxContent: (...p) => setDecisionBoxContent(...p),
        showInputForm,
        setShowInputForm: (...p) => setShowInputForm(...p),
        riskProfileBuilderState,
        setRiskProfileBuilderState: (...p) => setRiskProfileBuilderState(...p),
      }}>
      {children}
    </RiskContexts.Provider>
  );
};
