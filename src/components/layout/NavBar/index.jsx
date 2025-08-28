// Navbar.jsx
import React, { useState, useEffect } from 'react';
import {
	Header,
	NavContainer,
	LogoLink,
	LogoImage,
	NavMenu,
	NavLink,
	MobileMenuIcon,
	MobileMenu,
	MobileNavLink,
	MobileNavLinkIcon,
	MobileNavLinkText,
} from './styles.js';

// Importando SVGs como componentes React para os ícones do menu mobile
const SolutionIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth="1.5"
		stroke="currentColor"
		className="w-6 h-6 mr-3"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
		/>
	</svg>
);

const FeaturesIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth="1.5"
		stroke="currentColor"
		className="w-6 h-6 mr-3"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"
		/>
	</svg>
);

const ProjectsIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth="1.5"
		stroke="currentColor"
		className="w-6 h-6 mr-3"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M2.25 21h19.5m-18-18h16.5a1.5 1.5 0 0 1 1.5 1.5v16.5a1.5 1.5 0 0 1-1.5 1.5H3.75A1.5 1.5 0 0 1 2.25 19.5V4.5A1.5 1.5 0 0 1 3.75 3Zm14.25 6.75h-5.25m5.25 3.75h-5.25M15 15h-5.25M10.5 18.75h.008v.008h-.008v-.008Z"
		/>
	</svg>
);

const ContactIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth="1.5"
		stroke="currentColor"
		className="w-6 h-6 mr-3"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
		/>
	</svg>
);

const PortalIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth="1.5"
		stroke="currentColor"
		className="w-6 h-6 mr-3"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
		/>
	</svg>
);

const Navbar = () => {
	// Estado para controlar se a página foi rolada
	const [scrolled, setScrolled] = useState(false);
	// Estado para controlar a visibilidade do menu mobile
	const [menuOpen, setMenuOpen] = useState(false);

	// Função para lidar com o evento de scroll
	const handleScroll = () => {
		// Se o scroll vertical for maior que 50px, define 'scrolled' como true
		const isScrolled = window.scrollY > 50;
		if (isScrolled !== scrolled) {
			setScrolled(isScrolled);
		}
	};

	// Adiciona e remove o listener de scroll ao montar e desmontar o componente
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [scrolled]);

	// Função para fechar o menu mobile
	const closeMenu = () => setMenuOpen(false);

	return (
		<Header $scrolled={scrolled} $menuOpen={menuOpen}>
			<NavContainer>
				<LogoLink href="#home" onClick={closeMenu}>
					{/* A logo a ser exibida depende dos estados 'scrolled' e 'menuOpen' */}
					<LogoImage
						src={
							menuOpen
								? '/img/LogoPretaGrande.png'
								: scrolled
								? '/img/LogoPretaGrande.png'
								: '/img/LogoBrancaGrande.png'
						}
						alt="Geplano Logo"
						$scrolled={scrolled}
						$menuOpen={menuOpen}
					/>
				</LogoLink>

				{/* Menu para telas grandes */}
				<NavMenu>
					<NavLink href="#solucao" $scrolled={scrolled}>
						Nossa Solução
					</NavLink>
					<NavLink href="#diferenciais" $scrolled={scrolled}>
						Diferenciais
					</NavLink>
					<NavLink href="#projetos" $scrolled={scrolled}>
						Projetos
					</NavLink>
					<NavLink href="#contato" $scrolled={scrolled}>
						Contato
					</NavLink>
					<NavLink
						href="https://www.obraprimaweb.com.br/portalcliente/geplanoengenharia"
						target="_blank"
						$scrolled={scrolled}
					>
						Portal do Cliente
					</NavLink>
				</NavMenu>

				{/* Botão do menu mobile */}
				<MobileMenuIcon
					onClick={() => setMenuOpen(!menuOpen)}
					$scrolled={scrolled}
					$menuOpen={menuOpen}
				>
					<svg stroke="currentColor" fill="none" viewBox="0 0 24 24">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16m-7 6h7"
						></path>
					</svg>
				</MobileMenuIcon>
			</NavContainer>

			{/* Container do menu mobile */}
			<MobileMenu $isOpen={menuOpen}>
				<MobileNavLink href="#solucao" onClick={closeMenu}>
					<MobileNavLinkIcon>
						<SolutionIcon />
					</MobileNavLinkIcon>
					<MobileNavLinkText>Nossa Solução</MobileNavLinkText>
				</MobileNavLink>
				<MobileNavLink href="#diferenciais" onClick={closeMenu}>
					<MobileNavLinkIcon>
						<FeaturesIcon />
					</MobileNavLinkIcon>
					<MobileNavLinkText>Diferenciais</MobileNavLinkText>
				</MobileNavLink>
				<MobileNavLink href="#projetos" onClick={closeMenu}>
					<MobileNavLinkIcon>
						<ProjectsIcon />
					</MobileNavLinkIcon>
					<MobileNavLinkText>Projetos</MobileNavLinkText>
				</MobileNavLink>
				<MobileNavLink href="#contato" onClick={closeMenu}>
					<MobileNavLinkIcon>
						<ContactIcon />
					</MobileNavLinkIcon>
					<MobileNavLinkText>Contato</MobileNavLinkText>
				</MobileNavLink>
				<MobileNavLink
					href="https://www.obraprimaweb.com.br/portalcliente/geplanoengenharia"
					target="_blank"
					onClick={closeMenu}
				>
					<MobileNavLinkIcon>
						<PortalIcon />
					</MobileNavLinkIcon>
					<MobileNavLinkText>Portal do Cliente</MobileNavLinkText>
				</MobileNavLink>
			</MobileMenu>
		</Header>
	);
};

export default Navbar;
