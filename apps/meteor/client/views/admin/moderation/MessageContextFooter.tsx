import { Button, Menu, Option, ButtonGroup } from '@rocket.chat/fuselage';
import { useTranslation } from '@rocket.chat/ui-contexts';
import React from 'react';
import type { FC } from 'react';

import useDeactivateUserAction from './hooks/useDeactivateUserAction';
import useDeleteMessagesAction from './hooks/useDeleteMessagesAction';
import useDismissUserAction from './hooks/useDismissUserAction';
import useResetAvatarAction from './hooks/useResetAvatarAction';

const MessageContextFooter: FC<{ userId: string; deleted: boolean }> = ({ userId, deleted }) => {
	const t = useTranslation();
	const { action } = useDeleteMessagesAction(userId);

	return (
		<ButtonGroup flexGrow={1}>
			<Button
				icon='trash'
				flexGrow={1}
				onClick={action}
				title={t('delete-message')}
				aria-label={t('Moderation_Delete_all_messages')}
				danger
			>
				{t('Moderation_Delete_all_messages')}
			</Button>

			<Menu
				options={{
					approve: useDismissUserAction(userId),
					deactivate: { ...useDeactivateUserAction(userId), ...(deleted && { disabled: true }) },
					resetAvatar: { ...useResetAvatarAction(userId), ...(deleted && { disabled: true }) },
				}}
				renderItem={({ label: { label, icon }, ...props }): JSX.Element => (
					<Option aria-label={label} label={label} icon={icon} {...props} />
				)}
			/>
		</ButtonGroup>
	);
};

export default MessageContextFooter;
