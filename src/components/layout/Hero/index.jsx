// Hero.jsx
import React, { useState, useEffect } from 'react';
import {
	HeroSection,
	HeroSliderContainer,
	HeroSlide,
	Overlay,
	ContentContainer,
	MainHeading,
	Subheading,
	CtaButton,
} from './styles';

// Lista de imagens para o slider, baseada no protótipo
const heroImages = [
	'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
	'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop',
	'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop',
	'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2070&auto=format&fit=crop',
];

const Hero = () => {
	// Estado para controlar o slide ativo
	const [currentSlide, setCurrentSlide] = useState(0);

	// useEffect para trocar o slide a cada 5 segundos
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImages.length);
		}, 5000); // Muda a imagem a cada 5 segundos

		// Limpa o intervalo quando o componente é desmontado
		return () => clearInterval(timer);
	}, []);

	return (
		<HeroSection id="home">
			<HeroSliderContainer>
				{heroImages.map((imgUrl, index) => (
					<HeroSlide
						key={index}
						style={{ backgroundImage: `url(${imgUrl})` }}
						$isActive={index === currentSlide} // Prop para controlar a visibilidade do slide
					/>
				))}
			</HeroSliderContainer>
			<Overlay />
			<ContentContainer>
				<MainHeading>CONSTRUIR NUNCA FOI TÃO TRANQUILO</MainHeading>
				<Subheading>
					Somos uma empresa especializada em gestão e consultoria de
					obras, preparada para atender clientes exigentes que
					valorizam qualidade, tranquilidade e economia.
				</Subheading>
				<CtaButton href="#solucao">Descubra Nossa Solução</CtaButton>
			</ContentContainer>
		</HeroSection>
	);
};

export default Hero;
