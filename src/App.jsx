import { Container} from './styles/GlobalStyle';
import Navbar from './components/layout/NavBar/index';
import Hero from './components/layout/Hero';
import Footer from './components/layout/Footer';
import AboutSection from './components/layout/Sobre';

function App() {
	return (
		<Container>
			<Navbar />
			<Hero />
			<AboutSection />




			<Footer />
		</Container>
	);
}

export default App;
