import React, { useEffect, useState } from "react";
import { getRobots } from "../Services/DataService";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Container, Row, Col, Form } from "react-bootstrap";
import "./Home.css";
import tunes from "../Assets/tunes.mp3";


const Home = () => {
  const [allRobots, setAllRobots] = useState([]);
  let allFetchedRobots = [];

  useEffect(() => {
    getAllRobots();
  }, []);

  const getAllRobots = async () => {
    allFetchedRobots = await getRobots();
    setAllRobots([...allFetchedRobots]);
  };

  const setSorting = async (value) => {
    if (value == "1") {
      allFetchedRobots = await allRobots.sort((a, b) => a.robotId - b.robotId);
    } else if (value == "2") {
      allFetchedRobots = await allRobots.sort((a, b) => a.robotId - b.robotId);
    } else if (value == "3") {
      allFetchedRobots = await allRobots.sort(
        (a, b) => a.batteryLevel - b.batteryLevel
      );
    } else if (value == "4") {
      allFetchedRobots = await allRobots.sort((a, b) => a.y - b.y);
    } else if (value == "5") {
      allFetchedRobots = await allRobots.sort((a, b) => a.x - b.x);
    }
    setAllRobots([...allFetchedRobots]);
  };

  return (
    <Container fluid>
      <Row>
        <Col lg={12} className="mt-3">
          <h1>SVT Robotics Assessment</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Listen to some tunes while you check my work :)</p>
          <audio controls>
            <source src={tunes} type="audio/mpeg" />
          </audio>
        </Col>
      </Row>
      <Row className="center">
        <Col lg={6} className="mb-5 mt-3">
          <Form.Select
            aria-label="Sort by robot attributes"
            onChange={({ target: { value } }) => setSorting(value)}
          >
            <option value="1">Sort by robot attributes</option>
            <option value="2">Robot ID</option>
            <option value="3">Battery Level</option>
            <option value="4">Y Cordinate</option>
            <option value="5">X Cordinate</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col lg={12} className="p-5">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#Robot ID</th>
                <th>Battery Level</th>
                <th>Y Cordinate</th>
                <th>X Cordinate</th>
              </tr>
            </thead>

            {allRobots.map((robot, idx) => {
              return (
                <>
                  <tbody key={idx}>
                    <tr>
                      <td>{robot.robotId}</td>
                      <td>{robot.batteryLevel}</td>
                      <td>{robot.y}</td>
                      <td>{robot.x}</td>
                    </tr>
                  </tbody>
                </>
              );
            })}
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
