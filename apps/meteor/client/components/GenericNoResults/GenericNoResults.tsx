import type { Icon } from '@rocket.chat/fuselage';
import { Box, States, StatesIcon, StatesTitle, StatesSubtitle, StatesActions, StatesAction } from '@rocket.chat/fuselage';
import { useTranslation } from '@rocket.chat/ui-contexts';
import type { ComponentProps } from 'react';
import React from 'react';

type GenericNoResultsProps = {
	icon?: ComponentProps<typeof Icon>['name'];
	title?: string;
	description?: string;
	buttonTitle?: string;
	buttonAction?: () => void;
	linkText?: string;
	linkHref?: string;
};

// TODO: Create `StatesLink`
const GenericNoResults = ({
	icon = 'magnifier',
	title,
	description,
	buttonTitle,
	buttonAction,
	linkHref,
	linkText,
}: GenericNoResultsProps) => {
	const t = useTranslation();

	return (
		<States>
			<StatesIcon name={icon} />
			<StatesTitle>{title || t('No_results_found')}</StatesTitle>
			{description && <StatesSubtitle>{description}</StatesSubtitle>}
			{buttonTitle && buttonAction && (
				<StatesActions>
					<StatesAction onClick={buttonAction}>{buttonTitle}</StatesAction>
				</StatesActions>
			)}
			{linkText && linkHref && (
				<Box is='a' mbs='x16' target='_blank' href={linkHref}>
					{linkText}
				</Box>
			)}
		</States>
	);
};

export default GenericNoResults;
