import { createGlobalStyle, styled} from 'styled-components';

const GlobalStyle = createGlobalStyle`
	*, *::before, *::after {
		box-sizing: border-box;
	}
	body {
		margin: 0;
		padding: 0;
		font-family: Arial, Helvetica, sans-serif;
		background: #f8f9fa;
		color: #212529;
	}
`;
export default GlobalStyle;

export const Container = styled.div`
	/* Classe: "container" */
	width: 100%;
	/* Classe: "mx-auto" */
	margin-left: auto;
	margin-right: auto;

	/* Classe: "px-4" (padding mobile-first) */
	padding-left: 1rem; /* 16px */
	padding-right: 1rem; /* 16px */

	/* Breakpoints responsivos padrões do Tailwind */

	/* Classe: "sm:px-6" */
	@media (min-width: 640px) {
		max-width: 640px;
		padding-left: 1.5rem; /* 24px */
		padding-right: 1.5rem; /* 24px */
	}

	@media (min-width: 768px) {
		max-width: 768px;
	}

	/* Classe: "lg:px-8" */
	@media (min-width: 1024px) {
		max-width: 1024px;
		padding-left: 2rem; /* 32px */
		padding-right: 2rem; /* 32px */
	}

	@media (min-width: 1280px) {
		max-width: 1280px;
	}

	@media (min-width: 1536px) {
		max-width: 1536px;
	}
`;

export const Teste = styled.div`
    height: 3000px;
    width: 100%;
    background-color: gray;
`