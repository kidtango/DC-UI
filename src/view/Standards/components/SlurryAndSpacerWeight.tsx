import React from 'react';
import { useTheme } from '@material-ui/core';
import { StandardsIcon } from 'icons/StandardsIcon';
import { AppCardProps, AppCard } from 'components/AppCard/AppCard';

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
  return <AppCard {...appCardContents} />;
};

export default SlurryAndSpacerWeight;
