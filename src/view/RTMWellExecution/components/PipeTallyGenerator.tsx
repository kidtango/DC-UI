import React from 'react';
import { useTheme } from '@material-ui/core';
import { AppCardProps, AppCard } from 'components/AppCard/AppCard';
import { RTMIcon } from 'icons/RTMIcon';
import { useRTMContext } from '../contexts/RTMContext';
import PipeTallyInputForm from './PipeTallyInputForm';

export interface RigSelectionProps {
  isError: boolean;
  isDisabled: boolean;
  isActive: boolean;
}

const PipeTallyGenerator: React.FC<RigSelectionProps> = (
  props: RigSelectionProps
) => {
  const { isError, isDisabled, isActive } = props;

  const theme = useTheme();
  const {
    setDecisionBoxContent,
    setShowInputForm,
    showInputForm,
  } = useRTMContext();

  const pipeTallyPrompt =
    'Please enter well depth pressure to generate a set of pipe tally options, and describe an event for a risk score';

  const initialPrompt =
    'Click the pipe tally generator app below to generate a set of pipe tallies and their associated risk for your well depth and pressure, or select another available app.';

  const appCardContents: AppCardProps = {
    domainTitle: 'RTM',
    appTitle: 'Pipe tally generator',
    iconColor: theme.palette.icon.RTM,
    cardState: {
      isDisabled,
      isError,
      isActive,
    },
    appIcon: <RTMIcon fontSize='inherit' />,
  };

  const handleClick = () => {
    setDecisionBoxContent!(pipeTallyPrompt);
    setShowInputForm!(!showInputForm);

    if (showInputForm) {
      setDecisionBoxContent!(initialPrompt);
    }
  };

  return (
    <div onClick={handleClick}>
      <AppCard {...appCardContents} />
    </div>
  );
};

export default PipeTallyGenerator;
