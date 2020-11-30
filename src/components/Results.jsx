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
				margin: '0px 150px',
			}}
		>
			{results?.length === 0
				? 'No hay imagenes'
				: results?.length < 10
				? results.map((photo) => {
						return (
							<Col style={{margin:'0px 50px'}} xs={12} s={8} md={2}>
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
							<Card style={{ textAlign: 'center', width: '250px' }}>
								<Card.Img variant='top' src={photo.img_src} />
								<Card.Body>
									<Card.Title>{photo.id}</Card.Title>
									<Card.Text>
										{photo.earth_date}
										<br />
										{photo.camera.full_name}
									</Card.Text>
								</Card.Body>
							</Card>
						);
				  })}
		</div>
	);
};

export default Results;
