import type { CallStates, IVoipRoom } from '@rocket.chat/core-typings';
import { ICallerInfo, VoIpCallerInfo } from '@rocket.chat/core-typings';
import { Device } from '@rocket.chat/ui-contexts';
import { createContext, useContext, useMemo } from 'react';
import { useSyncExternalStore } from 'use-sync-external-store/shim';

import { useHasLicense } from '../../ee/client/hooks/useHasLicense';
import { VoIPUser } from '../lib/voip/VoIPUser';

export type CallContextValue = CallContextDisabled | CallContextEnabled | CallContextReady | CallContextError;

type CallContextDisabled = {
	enabled: false;
	ready: false;
};

type CallContextEnabled = {
	enabled: true;
	ready: unknown;
};

type CallContextReady = {
	canMakeCall: boolean;
	enabled: true;
	ready: true;
	voipClient: VoIPUser;
	actions: CallActionsType;
	queueName: string;
	queueCounter: number;
	openedRoomInfo: { v: { token?: string }; rid: string };
	openWrapUpModal: () => void;
	openRoom: (rid: IVoipRoom['_id']) => void;
	createRoom: (caller: ICallerInfo) => IVoipRoom['_id'];
	closeRoom: (data?: { comment?: string; tags?: string[] }) => void;
	changeAudioOutputDevice: (selectedAudioDevices: Device) => void;
	changeAudioInputDevice: (selectedAudioDevices: Device) => void;
};
type CallContextError = {
	enabled: true;
	ready: false;
	error: Error;
};

export const isCallContextReady = (context: CallContextValue): context is CallContextReady => (context as CallContextReady).ready;

export const isCallContextError = (context: CallContextValue): context is CallContextError =>
	(context as CallContextError).error !== undefined;

export type CallActionsType = {
	mute: () => unknown;
	unmute: () => unknown;
	pause: () => unknown;
	resume: () => unknown;
	end: () => unknown;
	pickUp: () => unknown;
	reject: () => unknown;
};

const CallContextValueDefault: CallContextValue = {
	enabled: false,
	ready: false,
};

export const CallContext = createContext<CallContextValue>(CallContextValueDefault);

export const useIsVoipEnterprise = (): boolean => useHasLicense('voip-enterprise') === true;

export const useIsCallEnabled = (): boolean => {
	const { enabled } = useContext(CallContext);
	return enabled;
};

export const useIsCallReady = (): boolean => {
	const { ready } = useContext(CallContext);

	return Boolean(ready);
};
export const useIsCallError = (): boolean => {
	const context = useContext(CallContext);
	return Boolean(isCallContextError(context));
};

export const useCallContext = (): CallContextValue => useContext(CallContext);

export const useCallActions = (): CallActionsType => {
	const context = useContext(CallContext);

	if (!isCallContextReady(context)) {
		throw new Error('useCallActions only if Calls are enabled and ready');
	}
	return context.actions;
};

export const useCallerStatus = (): CallStates => {
	const context = useContext(CallContext);

	if (isCallContextReady(context)) {
		return context.voipClient.callState;
	}

	return 'INITIAL';
};

export const useCallerInfo = (): VoIpCallerInfo => {
	const context = useContext(CallContext);

	if (!isCallContextReady(context)) {
		throw new Error('useCallerInfo only if Calls are enabled and ready');
	}

	const { voipClient } = context;

	const [subscribe, getSnapshot] = useMemo(() => {
		let caller: VoIpCallerInfo = voipClient.callerInfo;

		const callback = (cb: () => void): (() => void) =>
			voipClient.on('stateChanged', () => {
				caller = voipClient.callerInfo;
				cb();
			});

		const getSnapshot = (): VoIpCallerInfo => caller;
		return [callback, getSnapshot];
	}, [voipClient]);

	return useSyncExternalStore(subscribe, getSnapshot);
};

export const useCallCreateRoom = (): CallContextReady['createRoom'] => {
	const context = useContext(CallContext);

	if (!isCallContextReady(context)) {
		throw new Error('useCallCreateRoom only if Calls are enabled and ready');
	}

	return context.createRoom;
};

export const useCallOpenRoom = (): CallContextReady['openRoom'] => {
	const context = useContext(CallContext);

	if (!isCallContextReady(context)) {
		throw new Error('useCallOpenRoom only if Calls are enabled and ready');
	}

	return context.openRoom;
};

export const useCallCloseRoom = (): CallContextReady['closeRoom'] => {
	const context = useContext(CallContext);

	if (!isCallContextReady(context)) {
		throw new Error('useCallCloseRoom only if Calls are enabled and ready');
	}

	return context.closeRoom;
};

export const useCallClient = (): VoIPUser => {
	const context = useContext(CallContext);

	if (!isCallContextReady(context)) {
		throw new Error('useCallClient only if Calls are enabled and ready');
	}

	return context.voipClient;
};

export const useQueueName = (): CallContextReady['queueName'] => {
	const context = useContext(CallContext);

	if (!isCallContextReady(context)) {
		throw new Error('useQueueName only if Calls are enabled and ready');
	}

	return context.queueName;
};

export const useQueueCounter = (): CallContextReady['queueCounter'] => {
	const context = useContext(CallContext);

	if (!isCallContextReady(context)) {
		throw new Error('useQueueCounter only if Calls are enabled and ready');
	}

	return context.queueCounter;
};

export const useWrapUpModal = (): CallContextReady['openWrapUpModal'] => {
	const context = useContext(CallContext);

	if (!isCallContextReady(context)) {
		throw new Error('useWrapUpModal only if Calls are enabled and ready');
	}

	return context.openWrapUpModal;
};

export const useOpenedRoomInfo = (): CallContextReady['openedRoomInfo'] => {
	const context = useContext(CallContext);

	if (!isCallContextReady(context)) {
		throw new Error('useOpenedRoomInfo only if Calls are enabled and ready');
	}

	return context.openedRoomInfo;
};

export const useChangeAudioOutputDevice = (): CallContextReady['changeAudioOutputDevice'] => {
	const context = useContext(CallContext);

	if (!isCallContextReady(context)) {
		throw new Error('useChangeAudioOutputDevice only if Calls are enabled and ready');
	}

	return context.changeAudioOutputDevice;
};

export const useChangeAudioInputDevice = (): CallContextReady['changeAudioOutputDevice'] => {
	const context = useContext(CallContext);

	if (!isCallContextReady(context)) {
		throw new Error('useChangeAudioInputDevice only if Calls are enabled and ready');
	}

	return context.changeAudioInputDevice;
};
