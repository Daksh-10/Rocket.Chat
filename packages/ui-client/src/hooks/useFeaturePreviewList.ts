import type { TranslationKey } from '@rocket.chat/ui-contexts';
import { useUserPreference, useSetting } from '@rocket.chat/ui-contexts';

export type FeaturesAvailable = 'quickReactions' | 'navigationBar';

export type FeaturePreviewProps = {
	name: FeaturesAvailable;
	i18n: TranslationKey;
	description: TranslationKey;
	group: 'Message' | 'Navigation';
	imageUrl?: string;
	value: boolean;
};

export const defaultFeaturesPreview: FeaturePreviewProps[] = [
	{
		name: 'quickReactions',
		i18n: 'Quick_reactions',
		description: 'Quick_reactions_description',
		group: 'Message',
		imageUrl: 'images/featurePreview/quick-reactions.png',
		value: false,
	},
	{
		name: 'navigationBar',
		i18n: 'Navigation_bar',
		description: 'Navigation_bar_description',
		group: 'Navigation',
		value: false,
	},
];

export const useFeaturePreviewList = () => {
	const featurePreviewEnabled = useSetting<boolean>('Accounts_AllowFeaturePreview');
	const userFeaturesPreview = useUserPreference<FeaturePreviewProps[]>('featuresPreview');

	if (!featurePreviewEnabled) {
		return { unseenFeatures: 0, features: [] as FeaturePreviewProps[], featurePreviewEnabled };
	}

	const unseenFeatures = defaultFeaturesPreview.filter(
		(feature) => !userFeaturesPreview?.find((userFeature) => userFeature.name === feature.name),
	).length;

	const mergedFeatures = defaultFeaturesPreview.map((feature) => {
		const userFeature = userFeaturesPreview?.find((userFeature) => userFeature.name === feature.name);
		return { ...feature, ...userFeature };
	});

	return { unseenFeatures, features: mergedFeatures, featurePreviewEnabled };
};
