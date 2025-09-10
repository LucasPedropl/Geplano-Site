import styled from 'styled-components';

// O container principal da seção, correspondente a <section id="sobre">
export const AboutSectionContainer = styled.section`
	background-color: #ffffff;
	width: 100%;
	padding: 4rem 1rem;
	box-sizing: border-box; /* Garante que o padding não aumente a largura total */

	@media (min-width: 768px) {
		padding: 6rem 2rem;
	}
`;

// Container centralizado para o conteúdo, correspondente a .container.mx-auto
export const Container = styled.div`
	width: 100%;
	max-width: 1280px; /* Largura padrão para containers XL do Tailwind */
	margin-left: auto;
	margin-right: auto;
	padding-left: 1rem;
	padding-right: 1rem;

	@media (min-width: 640px) {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
	}
	@media (min-width: 1024px) {
		padding-left: 2rem;
		padding-right: 2rem;
	}
`;

// O grid principal que divide a seção em duas colunas em telas maiores
export const MainGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 3rem; /* Equivalente ao gap-12 do Tailwind */
	align-items: center;

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;

// Coluna de conteúdo de texto (esquerda)
export const TextContent = styled.div`
	/* O scroll-reveal seria implementado com Intersection Observer ou uma lib como Framer Motion */
`;

// Título principal da seção
export const Heading = styled.h2`
	font-family: 'TarunoWide', sans-serif; /* Conforme <style> do HTML */
	font-size: 1.875rem; /* text-3xl */
	font-weight: 700;
	color: #111827; /* text-gray-900 */
	text-transform: uppercase;
	line-height: 1.2;
	overflow-wrap: break-word; /* CORREÇÃO: Impede o texto de estourar o container */
	word-wrap: break-word; /* Fallback para navegadores mais antigos */

	@media (min-width: 768px) {
		font-size: 2.25rem; /* md:text-4xl */
	}
`;

// Parágrafos de texto
export const Paragraph = styled.p`
	margin-top: 1rem;
	color: #4b5563; /* text-gray-600 */
	line-height: 1.6;
`;

// Grid para os números/estatísticas (direita)
export const StatsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1.5rem; /* gap-6 - Reduzido para telas menores */
	text-align: center;

	@media (min-width: 768px) {
		gap: 2rem; /* gap-8 */
	}
`;

// Container para cada item de estatística
export const StatItem = styled.div`
	/* Removido padding extra que poderia causar problemas em telas muito pequenas */
`;

// O número em destaque - COM RESPONSIVIDADE CORRIGIDA
export const StatNumber = styled.p`
	font-weight: 700;
	color: #a37e2b; /* text-geplano-gold */
	font-size: 1.5rem; /* text-2xl */

	@media (min-width: 640px) {
		font-size: 2.25rem; /* sm:text-4xl */
	}

	@media (min-width: 768px) {
		font-size: 3rem; /* md:text-5xl */
	}
`;

// A descrição da estatística
export const StatLabel = styled.p`
	margin-top: 0.5rem; /* mt-2 do protótipo */
	color: #6b7280; /* text-gray-500 */
	font-size: 0.875rem; /* Adicionado um tamanho de fonte para melhor controle */
`;
