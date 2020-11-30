import React, { useState } from 'react';

import { Card, Form, Button } from 'react-bootstrap';
import styles from './searchbar.module.css';

const apikey = 'o5lbWqCAy5pD5P3so5UC6eL9z9rV3BxRVAR3ssk8';

function formatDate(date) {
	var d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;

	return [year, month, day].join('-');
}

const handleSearch = async (state, setResponse, setState) => {
	setState({ ...state, loading: true });

	let date = formatDate(new Date());

	const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${
		state.rover !== '' ? state.rover : 'curiosity'
	}/photos?earth_date=${state.date !== '' ? state.date : date}&camera=${
		state.camera !== '' ? state.camera : 'fhaz'
	}&api_key=${apikey}`;
	const response = await (await fetch(URL)).json();

	setState({ ...state, loading: false, date: date });

	return setResponse(() => response.photos);
};

const Searchbar = ({ setResults }) => {
	const [state, setState] = useState({
		date: '',
		camera: 'fhaz',
		rover: 'curiosity',
		loading: false,
	});

	const cameras = [
		'fhaz',
		'rhaz',
		'mast',
		'chemcam',
		'mahli',
		'mardi',
		'navcam',
		'pancam',
		'minites',
	];

	const rovers = ['curiosity', 'opportunity', 'spirit'];

	return (
		<Card className={styles.card} body>
			<Form.Control
				value={state.camera}
				onChange={(e) => setState({ ...state, camera: e.target.value })}
				className={styles.select}
				as='select'
				size='sm'
			>
				{cameras.map((camera) => {
					return <option ey={camera}>{camera.toUpperCase()}</option>;
				})}
			</Form.Control>

			<Form.Control
				value={state.rover}
				onChange={(e) => setState({ ...state, rover: e.target.value })}
				className={styles.select}
				as='select'
				size='sm'
			>
				{rovers.map((rover) => {
					return <option key={rover}>{rover.toUpperCase()}</option>;
				})}
			</Form.Control>

			<input
				value={state.date}
				onChange={(e) => {
					setState({ ...state, date: e.target.value });
				}}
				type='date'
			/>

			<Button
				disabled={state.loading}
				onClick={(e) => handleSearch(state, setResults, setState)}
			>
				{!state.loading ? 'Buscar' : 'Cargando...'}
			</Button>
		</Card>
	);
};

export default Searchbar;
