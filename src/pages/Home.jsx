import React, { useState } from 'react';

import { Navbar } from 'react-bootstrap';
import Searchbar from '../components/Searchbar';
import Results from '../components/Results'


const Home = () => {
	const [results, setResults] = useState();

	return (
		<div>
			<Navbar bg='dark' variant='dark'>
				<Navbar.Brand href='#home'>NASA - API</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className='justify-content-end'>
					<Navbar.Text>Nicolás Kenny</Navbar.Text>
				</Navbar.Collapse>
			</Navbar>

			<Searchbar setResults={setResults}/>
			<Results results={results} />
		</div>
	);
};

export default Home;
