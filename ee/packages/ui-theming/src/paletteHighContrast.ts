export const palette = [
	{
		category: 'Stroke',
		description: "Use as component's outline, stroke, dividers",
		list: [
			{ name: 'stroke-extra-light', token: 'N250', color: '#EBECEF' },
			{ name: 'stroke-light', token: 'N500', color: '#CBCED1' },
			{ name: 'stroke-medium', token: 'N600', color: '#9EA2A8' },
			{ name: 'stroke-dark', token: 'N700', color: '#6C727A' },
			{ name: 'stroke-extra-dark', token: 'N800', color: '#2F343D' },
			{ name: 'stroke-extra-light-highlight', token: 'P200', color: '#D1EBFE' },
			{ name: 'stroke-highlight', token: 'P500', color: '#156FF5' },
			{ name: 'stroke-extra-light-error', token: 'D200', color: '#FFC1C9' },
			{ name: 'stroke-error', token: 'D500', color: '#EC0D2A' },
		],
	},
	{
		category: 'Surface',
		description: 'Use as a container on top of the background',
		list: [
			{ name: 'surface-light', token: 'white', color: '#FFFFFF' },
			{ name: 'surface-tint', token: 'N100', color: '#F7F8FA' },
			{ name: 'surface-room', token: 'white', color: '#FFFFFF' },
			{ name: 'surface-neutral', token: 'N400', color: '#E4E7EA' },
			{ name: 'surface-disabled', token: 'N100', color: '#F7F8FA' },
			{ name: 'surface-hover', token: 'N200', color: '#F2F3F5' },
			{ name: 'surface-selected', token: 'N400', color: '#D7DBE0' },
			{ name: 'surface-dark', token: 'N900', color: '#1F2329' },
			{ name: 'surface-featured', token: '', color: '#5F1477' },
			{ name: 'surface-featured-hover', token: '', color: '#4A105D' },
			{ name: 'surface-overlay', token: '', color: 'rgba(47, 52, 61, 0.5)' },
		],
	},
	{
		category: 'Shadow',
		description: 'Use as a shadow color',
		list: [
			{ name: 'shadow-highlight', token: '', color: '#D1EBFE' },
			{ name: 'shadow-danger', token: '', color: '#FFE9EC' },
		],
	},
	{
		category: 'Font',
		description: 'These should be applied according to surfaces',
		list: [
			{ name: 'font-white', token: 'white', color: '#FFFFFF' },
			{ name: 'font-disabled', token: '', color: '#F7F8FA' },
			{ name: 'font-annotation', token: '', color: '#7020C0' },
			{ name: 'font-hint', token: '', color: '#3C3F44' },
			{ name: 'font-secondary-info', token: '', color: '#3C3F44' },
			{ name: 'font-default', token: '', color: '#24272E' },
			{ name: 'font-titles-labels', token: '', color: '#1F2329' },
			{ name: 'font-info', token: '', color: '#084BB0' },
			{ name: 'font-danger', token: '', color: '#A90A1E' },
			{ name: 'font-pure-black', token: '', color: '#2F343D' },
			{ name: 'font-pure-white', token: '', color: '#FFFFFF' },
		],
	},
	{
		category: 'Status',
		description: 'Status Background',
		list: [
			{ name: 'status-background-info', token: 'P200', color: '#D1EBFE' },
			{ name: 'status-background-success', token: 'S500', color: '#C0F6E4' },
			{ name: 'status-background-danger', token: 'D200', color: '#FFC1C9' },
			{ name: 'status-background-warning', token: 'W200', color: '#FFECAD' },
			{ name: 'status-background-warning-2', token: 'W100', color: '#FFF8E0' },
			{ name: 'status-background-service-1', token: 'S1-200', color: '#FAD1B0' },
			{ name: 'status-background-service-2', token: 'S2-200', color: '#EDD0F7' },
			{ name: 'status-background-service-3', token: 'S2-700', color: '#5F1477' },
		],
	},
	{
		description: 'Status Font',
		list: [
			{ name: 'status-font-on-info', token: '', color: '#053070' },
			{ name: 'status-font-on-success', token: '', color: '#0D5940' },
			{ name: 'status-font-on-danger', token: 'D800', color: '#9B1325' },
			{ name: 'status-font-on-warning', token: 'W900', color: '#B88D00' },
			{ name: 'status-font-on-warning-2', token: 'N800', color: '#2F343D' },
			{ name: 'status-font-on-service-1', token: 'S1-800', color: '#974809' },
			{ name: 'status-font-on-service-2 ', token: 'S2-600', color: '#7F1B9F' },
			{ name: 'status-font-on-service-3 ', token: 'white', color: '#FFFFFF' },
		],
	},
	{
		category: 'Badge',
		description: 'Badge Background',
		list: [
			{ name: 'badge-background-level-0', token: '', color: '#F4F5F6' },
			{ name: 'badge-background-level-1', token: 'N700', color: '#52565B' },
			{ name: 'badge-background-level-2', token: '', color: '#064FBC' },
			{ name: 'badge-background-level-3', token: '', color: '#874108' },
			{ name: 'badge-background-level-4', token: '', color: '#AE091F' },
		],
	},
	{
		category: 'Status Bullet',
		description: 'Used to show user status',
		list: [
			{ name: 'status-bullet-online', token: '', color: '#158D65' },
			{ name: 'status-bullet-away', token: '', color: '#AC892F' },
			{ name: 'status-bullet-busy', token: '', color: '#DA1F37' },
			{ name: 'status-bullet-disabled', token: '', color: '#F38C39' },
			{ name: 'status-bullet-offline', token: '', color: '#AC892F' },
			{ name: 'status-bullet-loading', token: '', color: '#9ea2a8' },
		],
	},
	{
		category: 'Elevation',
		description: 'Elevation border and shadow levels',
		list: [
			{ name: 'shadow-elevation-border', token: '', color: '#EBECEF' },
			{ name: 'shadow-elevation-1', token: '', color: 'rgba(47, 52, 61, 0.1)' },
			{ name: 'shadow-elevation-2x', token: '', color: 'rgba(47, 52, 61, 0.08)' },
			{ name: 'shadow-elevation-2y', token: '', color: 'rgba(47, 52, 61, 0.12)' },
		],
	},
	{
		category: 'Button',
		description: 'Primary Background',
		list: [
			{ name: 'button-background-primary-default', token: '', color: '#084FBA' },
			{ name: 'button-background-primary-hover', token: '', color: '#063D8E' },
			{ name: 'button-background-primary-press', token: '', color: '#09305D' },
			{ name: 'button-background-primary-focus', token: '', color: '#084FBA' },
			{ name: 'button-background-primary-keyfocus', token: '', color: '#084FBA' },
			{ name: 'button-background-primary-disabled', token: '', color: '#8CCDFD' },
		],
	},
	{
		description: 'Secondary Background',
		list: [
			{ name: 'button-background-secondary-default', token: 'N400', color: '#E4E7EA' },
			{ name: 'button-background-secondary-hover', token: 'N500', color: '#CBCED1' },
			{ name: 'button-background-secondary-press', token: '', color: '#C4C6CA' },
			{ name: 'button-background-secondary-focus', token: 'N400', color: '#E4E7EA' },
			{ name: 'button-background-secondary-keyfocus', token: 'N400', color: '#E4E7EA' },
			{ name: 'button-background-secondary-disabled', token: 'N300', color: '#EEEFF1' },
		],
	},
	{
		description: 'Secondary Danger Background',
		list: [
			{ name: 'button-background-secondary-danger-default', token: '', color: '#F4F5F6' },
			{ name: 'button-background-secondary-danger-hover', token: '', color: '#E4E6E7' },
			{ name: 'button-background-secondary-danger-press', token: '', color: '#C9CBCF' },
			{ name: 'button-background-secondary-danger-focus', token: 'N400', color: '#E4E7EA' },
			{ name: 'button-background-secondary-danger-keyfocus', token: 'N400', color: '#E4E7EA' },
			{ name: 'button-background-secondary-danger-disabled', token: '', color: '#FAFAFA' },
		],
	},
	{
		description: 'Danger Background',
		list: [
			{ name: 'button-background-danger-default', token: '', color: '#B30A20' },
			{ name: 'button-background-danger-hover', token: '', color: '#901323' },
			{ name: 'button-background-danger-press', token: '', color: '#7A101D' },
			{ name: 'button-background-danger-focus', token: '', color: '#B30920' },
			{ name: 'button-background-danger-keyfocus', token: '', color: '#B30A20' },
			{ name: 'button-background-danger-disabled', token: 'D200', color: '#FFC1C9' },
		],
	},
	{
		description: 'Success Background',
		list: [
			{ name: 'button-background-success-default', token: '', color: '#158D65' },
			{ name: 'button-background-success-hover', token: 'S900', color: '#106D4F' },
			{ name: 'button-background-success-press', token: 'S1000', color: '#0D5940' },
			{ name: 'button-background-success-focus', token: '', color: '#158D65' },
			{ name: 'button-background-success-keyfocus', token: '', color: '#158D65' },
			{ name: 'button-background-success-disabled', token: 'S200', color: '#C0F6E4' },
		],
	},
	{
		description: 'Font',
		list: [
			{ name: 'button-font-on-primary', token: 'white', color: '#FFFFFF' },
			{ name: 'button-font-on-primary-disabled', token: '', color: '#09305D' },
			{ name: 'button-font-on-secondary', token: '', color: '#14161A' },
			{ name: 'button-font-on-secondary-disabled', token: '', color: '#4D5257' },
			{ name: 'button-font-on-danger', token: 'white', color: '#FFFFFF' },
			{ name: 'button-font-on-danger-disabled', token: '', color: '#7A101D' },
			{ name: 'button-font-on-secondary-danger', token: '', color: '#6E0210' },
			{
				name: 'button-font-on-secondary-danger-disabled',
				token: '',
				color: '#AE091F',
			},
			{ name: 'button-font-on-success', token: '', color: '#EBECEF' },
			{ name: 'button-font-on-success-disabled', token: 'white', color: '#FFFFFF' },
		],
	},
];

export const paletteHighContrast = {
	...palette.reduce(
		(rec, group) => ({
			...rec,
			...group.list.reduce(
				(rec, item) => ({
					...rec,
					[item.name]: item.color,
				}),
				{} as Record<string, string>,
			),
		}),
		{} as Record<string, string>,
	),
};
