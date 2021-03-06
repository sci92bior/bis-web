import React, { FC } from 'react';

interface Props {
	className?: string;
}

export const ClearIcon: FC<Props> = ({ className }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="13.9" viewBox="289.7 414 16 13.9">
			<path
				fill="#FFF"
				d="M305.5 419.8h-2c-.6-3.3-3.4-5.8-6.8-5.8-3.8 0-6.9 3.1-6.9 6.9s3.1 6.9 6.9 6.9c1.7 0 3.3-.6 4.6-1.7l-1.4-1.8c-.8.8-1.9 1.2-3.1 1.2-2.5 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6c2.1 0 3.9 1.5 4.5 3.5h-2c-.3 0-.3.2-.2.4l3.1 3.8c.2.2.4.2.6 0l3.1-3.8c-.1-.3-.2-.4-.4-.4z"
			/>
		</svg>
	);
};
