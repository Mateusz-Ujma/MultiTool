import styled from 'styled-components';
import { theme } from '../../assets/theme';

export const Wrapper = styled.div`
	background-color: lightgrey;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
`;
export const MainText = styled.div`
	margin-top: 40px;
	width: 80%;
	text-align: center;
	h3 {
		font-size: ${theme.fontSize.m};
		font-weight: 600;
	}
`;
