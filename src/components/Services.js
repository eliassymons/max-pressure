import Card from "react-bootstrap/Card";

import serviceLogo from "../images/house-svgrepo-com.svg";
import sidingLogo from "../images/building-svgrepo-com.svg";

function Services() {
  return (
    <div className="services" id="services">
      <h1>Services</h1>
      <div className="service-cards">
        <Card style={{ width: "18rem" }}>
          <img alt="service-logo" className="service-logo" src={serviceLogo} />
          <Card.Body>
            <Card.Title>Siding & Roofs</Card.Title>
            <Card.Text>
              Our mobile soft wash unit utilizes environmentally safe chemicals
              and mixtures to remove dirt, grime and biological build up.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <img alt="service-logo" className="service-logo" src={sidingLogo} />
          <Card.Body>
            <Card.Title>Decks & Patios</Card.Title>
            <Card.Text>
              Our mobile unit utilizes pressure and the appropriate green
              chemicals to remove harmful stains, paint and anything else that
              may have found it’s way onto hard surfaces.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Services;
