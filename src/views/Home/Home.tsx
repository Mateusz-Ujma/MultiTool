import { NavLink } from 'react-router-dom';
import { ButtonWrapper, MainText, Wrapper } from './Home.styles';

const Home = () => {
	return (
		<Wrapper>
			<MainText>
				<h3>
					Nie zapomnisz już o rzeczach, które musisz kupić podczas
					zakupów spożywczych (i nie tylko).Ta aplikajca pozwoli ci
					łatwo dodawać pozycje do twojej listy, gdy o nich myślisz, a
					także pomaże ci efektywnie organizować zakupy. Dzięki
					aplikacji możesz również oznaczać przedmioty jako kupione,
					dzięki czemu będziesz sprawniej robić zakupy.
				</h3>
			</MainText>

			<ButtonWrapper>
				<button>
					<NavLink to='/login'>Zaloguj</NavLink>
				</button>
				lub
				<button>
					<NavLink to='/register'>Załóż darmowe konto</NavLink>
				</button>
			</ButtonWrapper>
		</Wrapper>
	);
};

export default Home;
