import React from 'react';
import { AppCardProps, AppCard } from 'components/AppCard/AppCard';
import { RiskIcon } from 'icons/RiskIcon';
import { useTheme } from '@material-ui/core';
import { useRiskContexts } from 'view/Risk/contexts/RiskContexts';

const riskProfileBuilderPrompt =
  'Please provide key data in the details panel below:';

const initialPrompt = 'Select an app below to assess your risk.';

export interface RiskProfileBuilderProps {
  isError?: boolean;
  isDisabled?: boolean;
  isActive?: boolean;
}

const RiskProfileBuilder: React.FC<RiskProfileBuilderProps> = (
  props: RiskProfileBuilderProps
) => {
  const { isDisabled, isError, isActive } = props;

  const theme = useTheme();
  const {
    setDecisionBoxContent,
    setRiskProfileBuilderState,
    riskProfileBuilderState,
  } = useRiskContexts();

  const handleClick = () => {
    // Toggle pipeTallyGenerator AppCard on and off
    setRiskProfileBuilderState!((prevState) => ({
      ...prevState,
      isActive: !isActive,
    }));
    setDecisionBoxContent!(riskProfileBuilderPrompt);

    if (riskProfileBuilderState?.isActive) {
      setDecisionBoxContent!(initialPrompt);
    }
  };

  const appCardContents: AppCardProps = {
    domainTitle: 'RISK',
    appTitle: 'Risk Profile Builder',
    iconColor: theme.palette.icon.risk,
    cardState: {
      isDisabled,
      isError,
      isActive,
    },
    appIcon: <RiskIcon fontSize='inherit' />,
  };
  return (
    <div onClick={handleClick}>
      <AppCard {...appCardContents} />
    </div>
  );
};

export default RiskProfileBuilder;
