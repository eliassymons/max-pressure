import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Contact() {
  return (
    <div className="contact" id="contact">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label>Requested Service</Form.Label>
          <Form.Control type="text" placeholder="Enter Requested Service" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label>Additional Information</Form.Label>
          <Form.Control type="textArea" placeholder="Optional" />
        </Form.Group>
        <div className="btn-container">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Contact;
