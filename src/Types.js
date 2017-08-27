// @flow

type Shelf = 'currentlyReading' | 'wantToRead' | 'read' | 'none';

export type ShelfType = {
	name: string,
	type: Shelf
};

export type BookType = {
	authors: Array<string>,
	id: string,
	shelf?: Shelf,
	title: string,
	imageLinks: {
		thumbnail: string
	}
};
