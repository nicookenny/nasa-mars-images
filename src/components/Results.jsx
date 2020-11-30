import React from 'react';

import { Card, Col } from 'react-bootstrap';

const Results = ({ results }) => {
	console.log(results);
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
			}}
		>
			{results?.length === 0
				? 'No hay imagenes'
				: results?.length < 10
				? results.map((photo) => {
						return (
							<Col
								style={{
									display: 'flex',
									margin: '0 auto',
									justifyContent: 'center',
								}}
								xs={10}
								s={8}
								md={2}
							>
								<Card style={{ textAlign: 'center', width: '250px' }}>
									<Card.Img variant='top' src={photo.img_src} />
									<Card.Body>
										<Card.Title>{photo.id}</Card.Title>
										<Card.Text style={{ display: 'flex' }}>
											{photo.earth_date}
											<br />
											{photo.camera.full_name}
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						);
				  })
				: results?.slice(0, 10).map((photo) => {
						return (
							<Col xs={10} s={8} md={2}>
								<Card style={{ textAlign: 'center', width: '250px' }}>
									<Card.Img variant='top' src={photo.img_src} />
									<Card.Body>
										<Card.Title>{photo.id}</Card.Title>
										<Card.Text style={{ display: 'flex' }}>
											{photo.earth_date}
											<br />
											{photo.camera.full_name}
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						);
				  })}
		</div>
	);
};

export default Results;
