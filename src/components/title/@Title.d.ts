import { HTMLAttributes } from 'react';


interface ITitle extends HTMLAttributes<HTMLHeadingElement> {
	content: string;
	trailer?: string;
}

export default ITitle;
