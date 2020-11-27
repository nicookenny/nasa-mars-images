import React, { useState } from 'react';

import { Card, Form, Button } from 'react-bootstrap';
import styles from './searchbar.module.css';

const apikey = 'o5lbWqCAy5pD5P3so5UC6eL9z9rV3BxRVAR3ssk8';

const handleSearch = async (rover, date, camera, setResponse, setLoading) => {
	const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${
		rover !== '' ? rover : 'curiosity'
	}/photos?earth_date=${date !== '' ? date : Date()}&camera=${
		camera !== '' ? camera : 'fhaz'
	}&api_key=${apikey}`;
	setLoading(true);
	const response = await (await fetch(URL)).json();

	setLoading(false);

	return setResponse(response.photos);
};

const Searchbar = ({ setResults }) => {
	const [date, setDate] = useState('');
	const [camera, setCamera] = useState('fhaz');
	const [rover, setRover] = useState('curiosity');
	const [loading, isLoading] = useState(false);

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
				value={camera}
				onChange={(e) => setCamera(e.target.value)}
				className={styles.select}
				as='select'
				size='sm'
			>
				{cameras.map((camera) => {
					return <option ey={camera}>{camera.toUpperCase()}</option>;
				})}
			</Form.Control>

			<Form.Control
				value={rover}
				onChange={(e) => setRover(e.target.value)}
				className={styles.select}
				as='select'
				size='sm'
			>
				{rovers.map((rover) => {
					return <option key={rover}>{rover.toUpperCase()}</option>;
				})}
			</Form.Control>

			<input
				value={date}
				onChange={(e) => {
					setDate(e.target.value);
				}}
				type='date'
			/>

			<Button
				disabled={loading}
				onClick={(e) =>
					handleSearch(rover, date, camera, setResults, isLoading)
				}
			>
				{!loading ? 'Buscar' : 'Cargando...'}
			</Button>
		</Card>
	);
};

export default Searchbar;
