import { HTMLAttributes } from 'react';


export type ImageGalleryImage = {
	id: string;
	src: string;
	srcFull: string;
	description: string;
	width: number;
	height: number;
	downloadLink: string;
};

interface IImageGallery extends HTMLAttributes<HTMLDivElement> {
	images: ImageGalleryImage[];
	onEnd?: () => void
}

export default IImageGallery;
