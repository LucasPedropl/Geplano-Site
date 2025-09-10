import React from 'react';
import {
	AboutSectionContainer,
	Container,
	MainGrid,
	TextContent,
	Heading,
	Paragraph,
	StatsGrid,
	StatItem,
	StatNumber,
	StatLabel,
} from './styles.js';

// --- DADOS ---
// Dados das estatísticas para facilitar a renderização
const statsData = [
	{ number: '+ 30', label: 'Anos de Experiência do Corpo Técnico' },
	{ number: '+ 400', label: 'Projetos Executados' },
	{ number: '+ 20.000', label: 'M² Construídos' },
	{ number: '+ 50', label: 'Contratos Gerenciados' },
];

// --- COMPONENTE REACT ---
const AboutSection = () => {
	return (
		<AboutSectionContainer id="sobre">
			<Container>
				<MainGrid>
					<TextContent>
						<Heading>
							Para nós, construir é mais do que executar: é
							cuidar, organizar e garantir tranquilidade em todas
							as etapas.
						</Heading>
						<Paragraph>
							Fundada em 2014, a Geplano se destaca por ser uma
							empresa especializada em Gestão de Obras e
							Contratos.
						</Paragraph>
						<Paragraph>
							Iniciamos atuando no mercado de prestação de
							serviços de construção civil na área industrial, no
							Espírito Santo e Sul da Bahia, mas a partir de 2021
							direcionamos nossas atenções para a execução de
							obras em São Mateus-ES e região.
						</Paragraph>
						<Paragraph>
							Com um corpo técnico experiente e qualificado, que
							já esteve à frente de grandes obras e contratos no
							setor industrial, hoje podemos dizer que temos uma
							metodologia exclusiva Geplano de atuar.
						</Paragraph>
					</TextContent>

					<StatsGrid>
						{statsData.map((stat, index) => (
							<StatItem key={index}>
								<StatNumber>{stat.number}</StatNumber>
								<StatLabel>{stat.label}</StatLabel>
							</StatItem>
						))}
					</StatsGrid>
				</MainGrid>
			</Container>
		</AboutSectionContainer>
	);
};

export default AboutSection;
