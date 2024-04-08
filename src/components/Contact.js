import react from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function Contact() {
    return (
        <div> 
            

            <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label><br></br>
        <Form.Control type="email" placeholder="name@example.com" />
        {/* <Form.Control as="email" rows={6} /> */}
      </Form.Group><br></br>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Any Suggestions</Form.Label><br></br>
        <Form.Control as="textarea" rows={5} cols={40} />
      </Form.Group>
      {/* <Button variant="outline-success">Submit</Button>{' '} */}
      <Link to="/"> {/* Navigate to the Score page */}
              <Button variant="outline-success">Submit</Button>{' '}
            </Link>
    </Form>
    </div> 
   );
 }
export default Contact;