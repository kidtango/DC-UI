import React from 'react';
import { useTheme } from '@material-ui/core';
import { StandardsIcon } from 'icons/StandardsIcon';
import { AppCardProps, AppCard } from 'components/AppCard/AppCard';
import useStandardsContext from 'view/Standards/contexts';

const slurryWeightPrompt =
  'To generate a go/no-go decision to drill a well, please enter mud weight to calculate slurry spacer weights appropriate for your rig.';

const initialPrompt =
  'Select apps below to check if it advisable to drill a well';

export interface SlurryAndSpacerWeightProps {
  isError: boolean;
  isDisabled: boolean;
  isActive: boolean;
}

const SlurryAndSpacerWeight: React.FC<SlurryAndSpacerWeightProps> = (
  props: SlurryAndSpacerWeightProps
) => {
  const { isDisabled, isError, isActive } = props;
  const theme = useTheme();
  const {
    setDecisionBoxContent,
    slurrySpacerState,
    setSlurrySpacerState,
  } = useStandardsContext();

  const appCardContents: AppCardProps = {
    domainTitle: 'STANDARDS',
    appTitle: 'Slurry and spacer weight',
    iconColor: theme.palette.icon.standards,
    cardState: {
      isDisabled,
      isError,
      isActive,
    },
    appIcon: <StandardsIcon fontSize='inherit' />,
  };

  const handleClick = () => {
    setSlurrySpacerState!((prevState) => ({
      ...prevState,
      isActive: !isActive,
    }));
    setDecisionBoxContent!(slurryWeightPrompt);

    if (slurrySpacerState?.isActive) {
      setDecisionBoxContent!(initialPrompt);
    }
  };
  return (
    <div onClick={handleClick}>
      <AppCard {...appCardContents} />
    </div>
  );
};

export default SlurryAndSpacerWeight;
