import * as React from 'react';
import { Link } from 'react-router-dom';
import style from './style.css';

const Header = () => (
	<header className={style.header}>
		<Link style={{ textDecoration: "none", color: "white" }} href="/"><h1>Meme Library</h1></Link>
		<nav>
			<Link style={{ textDecoration: "none", color: "white" }} href="/">Home</Link>
		</nav>
	</header>
);

export default Header;
