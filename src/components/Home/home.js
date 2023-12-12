import React from "react";
import Carousel from 'react-bootstrap/Carousel';

class Home extends React.Component {


    render(){
        return (
        <div className="container">
            <div className="row">
                <div className="">
                    <div></div>
                    <div><h4 className="text-dark">ВкусоДОМ</h4>
                    <h6>Ви фали манџа, сарма...?</h6>
                    <p>Немате време за готвење или ви фали јадењето од мама, мирисот на <span className="fw-bold" style={{ color: '#CC5C29'}}>ДОМОТ</span>, вкусот на свежо испечен леб на баба, тогаш се наоѓате на правото место.
                    </p>
                    <p>Ние нудиме домашно зготвени, не многу брзи (за вас брзи) јадења, кои ги правиме со голема љубов и неизмерна посветеност.</p>
                    <p>Чувствувајте се како дома со нас.</p>
                    </div>
                </div>
            </div>
            <div className="row">
          <div className="col-md-8 offset-md-2">
          <Carousel>
              <Carousel.Item>
              <img className="d-block w-100" src="https://images.aws.nestle.recipes/resized/7e8fe1c190017dde6ad8c99681dd8c2e_WhatsApp_Image_2020-11-27_at_4.50.20_PM_1500_700.jpeg" alt="Slide 1" width={200} height={500}/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="https://www.ubavinaizdravje.mk/wp-content/uploads/2020/11/tavche-gravche.jpg" alt="Slide 2" width={200} height={500}/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="https://moirecepti.mk/content/uploads/2020/10/CIMG0721-7eea0d-800x598.jpg" alt="Slide 3" width={200} height={500}/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="https://3.bp.blogspot.com/-YNwCeE03LPk/WDyyTUmS3EI/AAAAAAAAAAM/ATlFK501eYYbKpJZaxt-rywb1jOxD0hLgCEw/s1600/%25D1%2581%25D0%25B5%25D0%25BB%25D1%2581%25D0%25BA%25D0%25BE%2B%25D0%25BC%25D0%25B5%25D1%2581%25D0%25BE.jpg" alt="Slide 4" width={200} height={500}/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="https://moirecepti.mk/content/uploads/2017/01/DSC_0020_glavna-945bf6.jpg" alt="Slide 5" width={200} height={500}/>
              </Carousel.Item>
            </Carousel>
            </div>
          </div>
        </div>
        )
    }

}

export default Home;