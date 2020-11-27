import React from 'react';

import { Card } from 'react-bootstrap';

const Results = ({ results }) => {
	return (
		<div style={{ display: 'flex', flexDirection: 'row',flexWrap:'wrap' }}>
			{results?.length === 0
				? 'No hay imagenes'
				: results?.length<10? results.map((photo) => {
						return (
							<Card style={{ width: '18rem',textAlign:'center',width:'250px' }}>
								<Card.Img variant='top' src={photo.img_src} />
								<Card.Body>
									<Card.Title>{photo.id}</Card.Title>
									<Card.Text>
										Fecha en la tierra: {photo.earth_date}
										Nombre completo de cámara: {photo.camera.full_name}
									</Card.Text>
								</Card.Body>
							</Card>
						);
				  }):results?.slice(0,10).map((photo) => {
                    return (
                        <Card style={{ width: '18rem' ,textAlign:'center',width:'250px'}}>
                            <Card.Img variant='top' src={photo.img_src} />
                            <Card.Body>
                                <Card.Title>{photo.id}</Card.Title>
                                <Card.Text>
                                    Fecha en la tierra: {photo.earth_date}
                                    Nombre completo de cámara: {photo.camera.full_name}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )})}
		</div>
	);
};

export default Results;
