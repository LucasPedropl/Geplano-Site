import { createGlobalStyle, styled} from 'styled-components';

const GlobalStyle = createGlobalStyle`
	*, *::before, *::after {
		box-sizing: border-box;
	}
	body {
		margin: 0;
		padding: 0;
		font-family: Arial, Helvetica, sans-serif;
		background: #ffffffff;
		color: #212529;
	}
`;
export default GlobalStyle;

export const Container = styled.div`
	width: 100%;
`;

export const Teste = styled.div`
    height: 3000px;
    width: 100%;
    background-color: gray;
`