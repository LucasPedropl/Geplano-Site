// Estilos do Footer
import styled from 'styled-components';

export const FooterContainer = styled.footer`
	width: 100%;
	/* CORREÇÃO: Padding responsivo, igual ao do protótipo */
	padding: 1.5rem 1rem;
	background: #1f2937; /* bg-gray-800 */
	color: #d1d5db; /* text-gray-300 */
	text-align: center;
	box-sizing: border-box; /* Garante que o padding não aumente a largura total */

	@media (min-width: 640px) {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
	}
	@media (min-width: 1024px) {
		padding-left: 2rem;
		padding-right: 2rem;
	}
`;
