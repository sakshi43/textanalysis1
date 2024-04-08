import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image1 from './image1.jpeg'; // Import the image file

function Home() {
  return (
    <div style={{ width: '80vw', height: '69vh', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: "20px" }}>
      <Card style={{ width: '55rem', height: "22rem" }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Card.Img variant="center" src={image1} alt="Image" style={{ width: '500px', height: '350px' }} />
          <div style={{ marginLeft: '30px' }}>
            <Card.Title>NLP</Card.Title>
            <Card.Text>
              Natural language processing (NLP) is an interdisciplinary subfield of computer science and information retrieval.
            </Card.Text>
            <Link to="/score"> {/* Navigate to the Score page */}
              <Button variant="primary">Analysis Of Text</Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Home;
