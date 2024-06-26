import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import Logo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

// Context
import { Context } from '../../context';

const Header = () => {
	const [user] = useContext(Context);

	return (
		<Wrapper>
			<Content>
				<Link to="/" >
					<LogoImg src={Logo} alt="react-movie-logo" />
				</Link>

				{user ? (
					<span>User: {user.username}</span>
				) : (
					<Link to="/login">
						<span>Log in</span>
					</Link>
				)}

				<TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
			</Content>
		</Wrapper>
	);
};


export default Header