import { useParams } from "react-router-dom";
import MyNavbar from "../../components/navbar/Navbar";
import { courseData } from "../../data";
import { Col, Container, Row } from "react-bootstrap";

function Course() {
  const courseId = useParams().courseId;
  const courseInfo = courseData.find((course) => course.id == courseId);
  console.log(courseInfo);

  return (
    <div>
      <MyNavbar />
      <Container>
        <Row className="align-items-center">
          <Col md={5}>
            <img src={courseInfo.img} />
          </Col>
          <Col md={7} className="my-3">
            <h2 style={{ fontFamily: "madimiOne" }}>{courseInfo.title}</h2>
            <p>Created by: {courseInfo.instructor}</p>
            <p>
              <b>{courseInfo.text}</b>
            </p>
            <p style={{ TextAlign: "justify" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, repellendus natus quae maxime voluptatem inventore!
              Quod tenetur perspiciatis ex, tempora in qui praesentium esse
              animi sapiente veniam officia quos facere?
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Course;
