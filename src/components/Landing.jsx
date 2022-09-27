import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ch from '../images/children.jpeg'
import yth from '../images/youth.jpg'
import bg from '../images/bg1.jpg'

const Landing = () => {
  console.log(Carousel);
  return (
  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.huffpost.com%2Fgen%2F4081658%2Fimages%2Fo-KIDS-SPORTS-facebook.jpg&f=1&nofb=1&ipt=f339d60bf5d74ae3dcd6e5222ba4b62fb13da7e8bd70c111930d3ef82d0ad77e&ipo=images'
        alt="First slide"
      />
      <Carousel.Caption>
        <div className='content'>
          <h1>we exisi to lift up the name of jesus</h1>
          <button>read our misson</button>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={yth}
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={bg}
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.fTR8Qjq8dTUvKfXEm-rIsAHaEK%26pid%3DApi&f=1&ipt=6522ecc7c127b73ebb5d7577e61c2d956d2e768daad4b813f21cbbfdb4ea4e9b&ipo=images'
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Landing;