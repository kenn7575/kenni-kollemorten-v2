export interface IProject {
	id: string;
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
