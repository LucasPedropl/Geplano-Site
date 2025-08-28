// Navbar.styles.js
import styled, { css } from 'styled-components';

// Estilo base para o Header. As props $scrolled e $menuOpen controlam a aparência.
export const Header = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 50;
	transition: all 0.3s ease-in-out;
	background-color: transparent;
	box-shadow: none;

	/* Estilo quando a página é rolada */
	${({ $scrolled, $menuOpen }) =>
		$scrolled &&
		!$menuOpen &&
		css`
			background-color: rgba(255, 255, 255, 0.9);
			backdrop-filter: blur(10px);
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
		`}

	/* Estilo quando o menu mobile está aberto */
  ${({ $menuOpen }) =>
		$menuOpen &&
		css`
			background-color: #ffffff;
		`}
`;

// Container principal da navegação
export const NavContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 5rem; /* 80px */
	margin: 0 auto;
	padding: 0 1rem;
	max-width: 1280px; /* Equivalente a container do Tailwind com breakpoints */

	@media (min-width: 640px) {
		padding: 0 1.5rem;
	}

	@media (min-width: 768px) {
		height: 6rem; /* 96px */
	}

	@media (min-width: 1024px) {
		padding: 0 2rem;
	}
`;

// Link da logo
export const LogoLink = styled.a`
	flex-shrink: 0;
`;

// Imagem da logo
export const LogoImage = styled.img`
	height: 4rem; /* 64px */
	transition: all 0.3s ease-in-out;

	@media (min-width: 768px) {
		height: 6rem; /* 96px */
	}
`;

// Menu de navegação para desktop
export const NavMenu = styled.nav`
	display: none; /* Escondido em telas pequenas */

	@media (min-width: 1024px) {
		display: flex;
		align-items: center;
		gap: 0.5rem; /* space-x-2 */
	}
`;

// Links de navegação para desktop
export const NavLink = styled.a`
	padding: 0.5rem 0.75rem;
	border-radius: 0.375rem;
	font-size: 0.875rem;
	font-weight: 500;
	transition: color 0.3s ease-in-out;
	text-decoration: none;

	/* Cor do link baseada no estado de scroll */
	color: ${({ $scrolled }) => ($scrolled ? '#4b5563' : 'white')};

	&:hover {
		color: ${({ $scrolled }) => ($scrolled ? '#111827' : '#e5e7eb')};
	}

	&.active {
		color: #a37e2b !important;
	}
`;

// Ícone do menu mobile (hambúrguer)
export const MobileMenuIcon = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 0.5rem;
	border-radius: 0.375rem;
	border: none;
	background: none;
	cursor: pointer;

	svg {
		height: 1.5rem;
		width: 1.5rem;
		transition: color 0.3s ease-in-out;
		/* Cor do ícone baseada no estado de scroll e menu aberto */
		color: ${({ $scrolled, $menuOpen }) =>
			$scrolled && !$menuOpen
				? '#111827'
				: $menuOpen
				? '#111827'
				: 'white'};
	}

	&:focus {
		outline: none;
	}

	@media (min-width: 1024px) {
		display: none; /* Esconde em telas grandes */
	}
`;

// Container do menu mobile
export const MobileMenu = styled.div`
	display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
	background-color: white;
	color: #4b5563;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
		0 2px 4px -1px rgba(0, 0, 0, 0.06);
	padding: 0.5rem 0.75rem 0.75rem;

	@media (min-width: 1024px) {
		display: none;
	}
`;

// Links de navegação para o menu mobile
export const MobileNavLink = styled.a`
	display: flex;
	align-items: center;
	padding: 0.75rem;
	font-size: 1rem;
	font-weight: 500;
	border-radius: 0.375rem;
	text-decoration: none;
	color: #374151; /* text-gray-700 */
	border-bottom: 1px solid #e5e7eb; /* border-gray-200 */

	&:last-child {
		border-bottom: none;
	}

	&:hover {
		background-color: #f3f4f6; /* hover:bg-gray-100 */
		color: #a37e2b; /* hover:text-geplano-gold */
	}
`;

// Ícone dentro do link do menu mobile
export const MobileNavLinkIcon = styled.span`
	margin-right: 0.75rem;
	width: 1.5rem;
	height: 1.5rem;
`;

// Texto dentro do link do menu mobile
export const MobileNavLinkText = styled.span``;
