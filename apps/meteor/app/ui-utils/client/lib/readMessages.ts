import type { IRoom } from '@rocket.chat/core-typings';
import { Emitter } from '@rocket.chat/emitter';
import { Meteor } from 'meteor/meteor';

import { RoomManager } from '../../../../client/lib/RoomManager';
import { ChatSubscription, ChatMessage } from '../../../models/client';
import { sdk } from '../../../utils/client/lib/SDKClient';
import { LegacyRoomManager } from './LegacyRoomManager';
import { RoomHistoryManager } from './RoomHistoryManager';

class ReadMessage extends Emitter {
	protected enabled: boolean;

	protected debug = false;

	constructor() {
		super();
		this.enable();
	}

	protected log(...args: any[]) {
		return this.debug && console.log(...args);
	}

	public enable() {
		this.enabled = document.hasFocus();
	}

	public disable() {
		this.enabled = false;
	}

	public isEnable() {
		return this.enabled === true;
	}

	public read(rid: IRoom['_id'] | undefined = RoomManager.opened) {
		if (!this.enabled) {
			this.log('readMessage -> readNow canceled by enabled: false');
			return;
		}

		if (!rid) {
			this.log('readMessage -> readNow canceled by rid: undefined');
			return;
		}

		const subscription = ChatSubscription.findOne({ rid });
		if (!subscription) {
			this.log('readMessage -> readNow canceled, no subscription found for rid:', rid);
			return;
		}

		if (subscription.alert === false && subscription.unread === 0) {
			this.log('readMessage -> readNow canceled, alert', subscription.alert, 'and unread', subscription.unread);
			return;
		}

		const room = LegacyRoomManager.getOpenedRoomByRid(rid);
		if (!room) {
			this.log('readMessage -> readNow canceled, no room found for typeName:', subscription.t + subscription.name);
			return;
		}

		// Only read messages if user saw the first unread message
		const unreadMark = document.querySelector<HTMLElement>('.message.first-unread, .rcx-message-divider--unread');
		if (unreadMark) {
			const visible = unreadMark.offsetTop >= 0;

			if (!visible) {
				this.log('readMessage -> readNow canceled, unread mark visible:', visible);
				return;
			}
			// if unread mark is not visible and there is more more not loaded unread messages
		} else if (RoomHistoryManager.getRoom(rid).unreadNotLoaded.get() > 0) {
			return;
		}

		return this.readNow(rid);
	}

	public readNow(rid: IRoom['_id'] | undefined = RoomManager.opened) {
		if (!rid) {
			this.log('readMessage -> readNow canceled, no rid informed');
			return;
		}

		const subscription = ChatSubscription.findOne({ rid });
		if (!subscription) {
			this.log('readMessage -> readNow canceled, no subscription found for rid:', rid);
			return;
		}

		return sdk.rest.post('/v1/subscriptions.read', { rid }).then(() => {
			RoomHistoryManager.getRoom(rid).unreadNotLoaded.set(0);
			return this.emit(rid);
		});
	}

	public refreshUnreadMark(rid: IRoom['_id']) {
		if (!rid) {
			return;
		}

		const subscription = ChatSubscription.findOne({ rid }, { reactive: false });
		if (!subscription) {
			return;
		}

		const room = LegacyRoomManager.getOpenedRoomByRid(rid);
		if (!room) {
			return;
		}

		if (!subscription.alert && subscription.unread === 0) {
			document.querySelector('.message.first-unread')?.classList.remove('first-unread');
			room.unreadSince.set(undefined);
			return;
		}

		let lastReadRecord = ChatMessage.findOne(
			{
				rid: subscription.rid,
				ts: {
					$lt: subscription.ls,
				},
			},
			{
				sort: {
					ts: -1,
				},
			},
		) as { ts: Date } | undefined;
		const { unreadNotLoaded } = RoomHistoryManager.getRoom(rid);

		if (!lastReadRecord && unreadNotLoaded.get() === 0) {
			lastReadRecord = { ts: new Date(0) };
		}

		room.unreadSince.set(lastReadRecord || unreadNotLoaded.get() > 0 ? subscription.ls : undefined);

		if (!lastReadRecord) {
			return;
		}

		const firstUnreadRecord = ChatMessage.findOne(
			{
				'rid': subscription.rid,
				'ts': {
					$gt: lastReadRecord.ts,
				},
				'u._id': {
					$ne: Meteor.userId() ?? undefined,
				},
			},
			{
				sort: {
					ts: 1,
				},
			},
		);

		if (firstUnreadRecord) {
			room.unreadFirstId = firstUnreadRecord._id;
			document.querySelector('.message.first-unread')?.classList.remove('first-unread');
			document.querySelector(`.message[data-id="${firstUnreadRecord._id}"]`)?.classList.add('first-unread');
		}
	}
}

export const readMessage = new ReadMessage();
