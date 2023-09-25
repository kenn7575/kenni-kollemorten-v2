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
	text: TextContent[];
}

export interface IProjectToUpload extends IProject {
	imageFile?: string | null;
	imageSmallFile?: string | null;
	text: TextContentToUpload[];
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
interface TextContentToUpload extends TextContent {
	imageFile?: string | null;
	imageSmallFile?: string | null;
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
