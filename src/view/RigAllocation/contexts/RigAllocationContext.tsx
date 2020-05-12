import React, { useState, useContext } from 'react';

// Glogal state for Rig Allocation App
type RigAllocationContextProps = {
  decisionBoxContent: string;
  setDecisionBoxContent: (value: React.SetStateAction<string>) => any;
  inputsForm: JSX.Element;
  showInputForm: boolean | undefined;
  setShowInputForm: (value: React.SetStateAction<boolean>) => any;

  rigSelectionView: {
    isError: boolean;
    isDisabled: boolean;
    isActive: boolean;
  };
  setRigSelectionView: (
    value: React.SetStateAction<{
      isError: boolean;
      isDisabled: boolean;
      isActive: boolean;
    }>
  ) => any;
};

// const setDecisionBoxContent: (value: React.SetStateAction<string>) => void

// Init context and set default props
const RigAllocationContext = React.createContext<
  Partial<RigAllocationContextProps>
>({});
export const useRigAllocationContext = () => useContext(RigAllocationContext);

// Initial State for DecisionBox's prompt
const initialDecisionBoxContent =
  'Select an application below to assist in your rig selection';

interface Props {
  children: React.ReactNode;
}

// Create RTM Context provider
const RigAllocationContextProvider: React.FC<Props> = ({ children }) => {
  const [decisionBoxContent, setDecisionBoxContent] = useState(
    initialDecisionBoxContent
  );

  const [showInputForm, setShowInputForm] = useState(false);

  const [rigSelectionView, setRigSelectionView] = useState({
    isError: false,
    isDisabled: false,
    isActive: false,
  });

  return (
    <RigAllocationContext.Provider
      value={{
        decisionBoxContent,
        setDecisionBoxContent: (...p) => setDecisionBoxContent(...p),
        showInputForm,
        setShowInputForm: (...p) => setShowInputForm(...p),
        rigSelectionView,
        setRigSelectionView: (...p) => setRigSelectionView(...p),
      }}>
      {children}
    </RigAllocationContext.Provider>
  );
};

export default RigAllocationContextProvider;
