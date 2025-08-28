// Hero.styles.js
import styled, { css, keyframes } from 'styled-components';

// Animação de zoom para o slide
const zoomIn = keyframes`
  from {
    transform: scale(1.05);
  }
  to {
    transform: scale(1);
  }
`;

// Container principal da seção Hero
export const HeroSection = styled.section`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	position: relative;
	width: 100%;
	text-align: center;
`;

// Container para os slides do background
export const HeroSliderContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

// Componente para cada slide individual
export const HeroSlide = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
	opacity: 0;
	transition: opacity 1.5s ease-in-out;
	transform: scale(1.05);

	/* Estilo para o slide ativo */
	${({ $isActive }) =>
		$isActive &&
		css`
			opacity: 1;
			animation: ${zoomIn} 6s linear forwards;
		`}
`;

// Overlay escuro sobre o background
export const Overlay = styled.div`
	position: absolute;
	inset: 0;
	background-color: rgba(0, 0, 0, 0.6);
`;

// Container para o conteúdo de texto e botão
export const ContentContainer = styled.div`
	z-index: 10;
	padding: 1rem;
`;

// Título principal
export const MainHeading = styled.h1`
	font-family: 'TarunoWide', sans-serif; /* Usando a fonte customizada */
	font-size: 2.25rem; /* text-4xl */
	font-weight: 700;
	text-transform: uppercase;
	line-height: 1.1;
	letter-spacing: -0.025em;

	@media (min-width: 768px) {
		font-size: 3.75rem; /* md:text-6xl */
		letter-spacing: normal;
	}

	@media (min-width: 1024px) {
		font-size: 4.5rem; /* lg:text-7xl */
	}
`;

// Subtítulo/Parágrafo
export const Subheading = styled.p`
	margin-top: 1rem;
	width: 100%;
	max-width: 42rem; /* max-w-2xl */
	margin-left: auto;
	margin-right: auto;
	font-size: 1.125rem; /* text-lg */
	color: #d1d5db; /* text-gray-200 */
	line-height: 1.6;

	@media (min-width: 768px) {
		font-size: 1.25rem; /* md:text-xl */
	}
`;

// Botão de Call to Action
export const CtaButton = styled.a`
	margin-top: 2rem;
	display: inline-block;
	background-color: #a37e2b; /* bg-geplano-gold */
	color: white;
	font-weight: 700;
	padding: 0.75rem 2rem;
	border-radius: 0.5rem; /* rounded-lg */
	text-transform: uppercase;
	letter-spacing: 0.1em; /* tracking-widest */
	text-decoration: none;
	transition: background-color 0.3s;

	&:hover {
		background-color: #8e6d23; /* Efeito de hover similar ao bg-opacity-90 */
	}
`;
