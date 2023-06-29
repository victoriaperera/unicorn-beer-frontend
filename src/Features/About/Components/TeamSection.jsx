import TeamMemberCard from "../Components/TeamMemberCard";
import { Col, Row } from "react-bootstrap";

function TeamSection() {
  return (
    <>
      <Row className="about-section about-section-team p-0 justify-content-center align-items-center ">
        <Col className="avatar-container py-5 ">
          <h3 className="mb-4">OUR TEAM</h3>
          <Row className="circle-avatar ">
            <TeamMemberCard />
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default TeamSection;
