import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import firstPage from "../WelcomePage/Image/luk.jpg"
import secondPage from "../WelcomePage/Image/t.jpg"
import thirdPage from "../WelcomePage/Image/d.jpg"
// import FirstCard from '../FirstpageCards/FirstCard';
import Projects from '../Projects/Projects';
import Recent from '../RecentWorks/Recent';
import HomeAward from '../HomeAward/HomeAward';



function First() {
  return (
    <div >
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={firstPage}
              alt="First slide"
              style={{ height: "100vh", width: "100vw", objectFit: "cover" }}
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={secondPage}
              alt="Second slide"
              style={{ height: "100vh", width: "100vw", objectFit: "cover" }}
            />

            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={thirdPage}
              alt="Third slide"
              style={{ height: "100vh", width: "100vw", objectFit: "cover" }}
            />

            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* <FirstCard /> */}
      <Projects />
      <HomeAward />
    </div>
  )
}

export default First
