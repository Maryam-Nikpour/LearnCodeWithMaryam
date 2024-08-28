import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "../../components/navbar/Navbar";
import progImage from "../../assets/images/programming.svg";
import CourseItem from "../../components/course/CourseItem";
import { useState } from "react";
import Footer from "../../components/footer/Footer";
import { courseData } from "../../data";

function Home() {
  const [courses, setCourses] = useState(courseData);
  return (
    <>
      <div>
        <MyNavbar />
        <Container>
          <Row className="my-5 align-items-center">
            <Col lg={6}>
              <h1>CodeWithMaryam</h1>
              <p style={{ textAlign: "justify" }}>
                Hello! I'm Maryam, a self-taught enthusiast deeply passionate
                about technology and web development. Having embarked on my
                journey over two years ago, I understand the challenges and
                frustrations beginners encounter when delving into the world of
                tech. However, through dedicated perseverance and countless
                trials, I've unearthed effective learning strategies and
                invaluable tips. Now, I'm here to share my wealth of knowledge
                with you, guiding you on your path to mastering web development
                effortlessly.
              </p>
            </Col>
            <Col lg={6} className="py-4">
              <img src={progImage} className="img-fluid" alt="" />
            </Col>
          </Row>
          <Row className="my-5">
            <h2 className="py-4">Courses</h2>
            {courses.map((course) => (
              <Col key={course.id} className="py-3" md={6} lg={4} xl={3}>
                <CourseItem {...course} />
              </Col>
            ))}
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
}
export default Home;
