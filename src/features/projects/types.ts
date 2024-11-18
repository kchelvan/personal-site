export type ProjectHeaderTypes = {
	label: string;
	link?: string;
	index: number;
};

export type ProjectImagesTypes = {
	label: string;
	imagesArray: any[];
	index?: number;
	scroll?: boolean;
};

export type ProjectDescriptionTypes = {
	description: string;
	techStack: string[];
	link?: string;
	label?: string;
};
