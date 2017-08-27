// @flow

export type ShelfType = {
	name: string,
	type: string
};

export type BookType = {
	authors: Array<string>,
	id: string,
	shelf?: string,
	title: string,
	imageLinks: {
		thumbnail: string
	}
};
