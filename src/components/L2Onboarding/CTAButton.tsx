import React from 'react';
import styled from 'styled-components';
import { fontFamilies } from 'styles/themes';
import { ButtonPrimary } from 'components/Button';

interface CTAButtonProps {
	copy: string;
	handleClick: Function;
	disabled?: boolean;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ copy, handleClick, disabled = false }) => {
	return (
		<Button disabled={disabled} onClick={() => handleClick()}>
			{copy}
		</Button>
	);
};

const Button = styled(ButtonPrimary)`
	background: linear-gradient(130.52deg, #f49e25 -8.54%, #b252e9 101.04%);
	border: 1px solid #ff8fc5;
	/* text-align: center;
	color: white;
	font-family: ${fontFamilies.bold};
	font-size: 16px;
	line-height: 20px;
	display: flex;
	align-items: center;
	letter-spacing: 0.2px;
	text-transform: uppercase;
	width: 600px;
	justify-content: center;
	height: 50px;
	margin-top: 24px;
	cursor: pointer; */
`;