export interface IProject {
	id: string | null;
	visits: number;
	title: string;
	description: string;
	image: string;
	imageSmall: string;
	label: string;
	dateCreated: string;
	subtitle: string;
	links: {
		name: string;
		url: string;
	}[];
	clips: string[];
	text: {
		title: string;
		image: string;
		imageSmall: string;
		description: string;
		code: string[];
	}[];
}
interface Link {
	name: string;
	url: string;
}

interface TextContent {
	image: string;
	code: string[];
	imageSmall: string;
	description: string;
	title: string;
}

interface AdvancementContent {
	view?: string;
	subject: string;
	grade: string;
	other?: string;
}

interface Advancement {
	education?: string;
	time: string;
	place: string;
	title: string;
	content: AdvancementContent[];
}

interface Apprenticeship {
	image_small: string;
	image: string;
	description: string;
	time: string;
	title: string;
}

export interface ICV {
	advancements: Advancement[];
	apprenticeships: Apprenticeship[];
}
