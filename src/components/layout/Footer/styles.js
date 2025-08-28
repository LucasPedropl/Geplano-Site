// Estilos do Footer
import styled from 'styled-components';

export const FooterContainer = styled.footer`
	width: 100%;
	padding: 1rem 2rem;
	background: ${({ theme }) => theme.colors.footerBg};
	color: ${({ theme }) => theme.colors.footerText};
	text-align: center;
`;
