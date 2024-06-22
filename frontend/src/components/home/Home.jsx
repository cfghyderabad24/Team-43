import CountUp from "react-countup";
import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css';
import image1 from '../../assets/image1.jpeg'
import image2 from '../../assets/image2.jpeg'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import image5 from '../../assets/image5.png'
import image6 from '../../assets/test1.png'
import image7 from '../../assets/test2.png'
import image8 from '../../assets/test3.png'
import image9 from '../../assets/test4.png'
import image10 from '../../assets/test5.png'
import image11 from '../../assets/agshealth.png'
import image12 from '../../assets/arcesium.png'
import image13 from '../../assets/changeorg.png'
import image14 from '../../assets/Dp_world.png'
import image15 from '../../assets/george.png'
import image16 from '../../assets/ghmc.png'
import image17 from '../../assets/hsbc.png'
import image18 from '../../assets/the hindu.png'
import image19 from '../../assets/Wdc.jpg'
import image20 from '../../assets/indianexpree.png'



function Home() {
const [direction, setDirection] = useState('ltr'); // State to toggle the direction of the Slider

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: direction === 'rtl' // Dynamic rtl property based on the direction state
};

// Function to handle beforeChange event of the Slider
const handleBeforeChange = (oldIndex, newIndex) => {
    // Toggle direction when reaching the last slide
    if (newIndex === 4) {
        setDirection('rtl');
    } else if (newIndex === 0) { // Toggle direction when reaching the first slide
        setDirection('ltr');
    }
};

return (
    <div className="home-container">
        <div className="content-container">
            <div className="text-content">
                <header>
                    
                </header>
                <section className="content fs-6 text-align-center">
                    
                </section>
            </div>
            
        </div>
        <div className="carousel-container">
            <Slider {...settings} beforeChange={handleBeforeChange}>
                <div><img src={image3} alt="Slide 1" /></div>
                <div><img src={image2} alt="Slide 2" /></div>
                <div><img src= {image1}alt="Slide 3" /></div>
                <div><img src={image4} alt="Slide 4" /></div>
                <div><img src={image5} alt="Slide 5" /></div>
            </Slider>
        </div>

        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="card cc card1 h-100">
                        <div className="card-body">
                            {/* <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/course-1648742-1400672.png" className='logo pic'></img> */}
                            <h5 className="card-title oo bg-dark fs-3 text-white rounded-2">Mission</h5>
                            <p className="card-text text-dark overflow-auto">
                            An award-winning organization registered in 2014, addressing a problem of 500 million women/girls not having access to menstrual needs. They aim to empower women and girls with sustainable menstrual health solutions.on Menstrual Hygiene Awareness Day, we are proud to launch our fundraising campaign for Project Hibiscus online. This initiative is dedicated to transforming the lives of marginalized adolescent girls in rural India by providing them with the sustainable menstrual products, education, and resources they desperately need.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card cc bg-gradient bg-secondary-subtle h-100">
                        <div className="card-body">
                            {/* <img src="https://cdn-icons-png.flaticon.com/512/1591/1591045.png" className='logo1 pic'></img> */}
                            <h5 className="card-title oo bg-dark  fs-3 text-white rounded-2">Vision</h5>
                            
                            <p className="card-text text-dark ">
                            We envision a future where the impacts of climate change are mitigated, and vulnerable communities have access to quality healthcare, education, and economic opportunities. We strive to empower women and girls in marginalised communities to take leadership roles in fighting climate change and promoting their well-being while also challenging gender inequalities.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card cc card1 h-100">
                        <div className="card-body">
                            {/* <img src="https://cdn4.iconfinder.com/data/icons/gamification-flat/64/learning-idea-knowledge-solve-experience-512.png" className='logo2 pic'></img> */}
                            <h5 className="card-title bg-dark text-white fs-3 oo rounded-2">Aim</h5>
                            <p className="card-text text-dark justify-content-center ">
                            Our website aims to empower individuals by offering sustainable and affordable menstrual hygiene solutions through cloth pads and menstrual cups. We strive to promote menstrual health awareness, eco-friendly choices, and accessibility to reliable products for all beneficiaries. Our platform serves as a resource hub, providing education, product information, and support to encourage sustainable menstruation practices and improve overall well-being.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <br />
            <br />
        <div className="classNAME">
          <img src="" alt="" />
        </div>
        </div>
        <div className="container">
            <div className="circles">
                <div className="circle">
                    <CountUp
                        start={0}
                        end={74700}
                        delay={0}
                        enableScrollSpy={true}
                        scrollSpyDelay={500}
                    >
                        {({ countUpRef }) => (
                            <div className="counter">
                                <span ref={countUpRef} />+
                            </div>
                        )}
                    </CountUp>
                    <span className="circle-name">

                        lives impacted
                    </span>
                </div>
                <div className="line" />
                <div className="circle">
                    <CountUp
                        start={0}
                        end={12}
                        delay={0}
                        enableScrollSpy={true}
                        scrollSpyDelay={500}
                    >
                        {({ countUpRef }) => (
                            <div className="counter">
                                <span ref={countUpRef} />+
                            </div>
                        )}
                    </CountUp>
                    <span className="circle-name">
                        Awards
                    </span>
                </div>
                
                <div className="line" />
                <div className="circle">
                    <CountUp
                        start={0}
                        end={2000}
                        delay={0}
                        enableScrollSpy={true}
                        scrollSpyDelay={500}
                    >
                        {({ countUpRef }) => (
                            <div className="counter">
                                <span ref={countUpRef} />+
                            </div>
                        )}
                    </CountUp>
                    <span className="circle-name">

                        workshops
                    </span>
                </div>
                <div className="line" />
                <div className="circle">
                
                    <CountUp
                        start={0}
                        end={60}
                        delay={0}
                        enableScrollSpy={true}
                        scrollSpyDelay={500}
                    >
                        {({ countUpRef }) => (
                            <div className="counter">
                                <span ref={countUpRef} />+
                            </div>
                        )}
                    </CountUp>
                    <span className="circle-name">
                        Partners
                    </span>
                </div>
            </div>

        </div>
        <br/>
        <h1>
          TESTIMONIALS
        </h1>
         <div className="carousel-container">
            <Slider {...settings} beforeChange={handleBeforeChange}>
                <div><img src={image6} alt="Slide 1" /></div>
                <div><img src={image7} alt="Slide 2" /></div>
                <div><img src= {image8}alt="Slide 3" /></div>
                <div><img src={image9} alt="Slide 4" /></div>
                <div><img src={image10} alt="Slide 5" /></div>
            </Slider>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <h1>PARTNERS AND SUPPORTERS </h1>
          <div style={{
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f8f9fa',
            display: 'flex',
            
            
          
            margin: '0',
        }}>
            <div style={{
                 // Blue background color
                
                
              
                padding: '2px',
                maxWidth: '300px', // Increased the maxWidth
                width: '100%',
                margin: '20px auto',
                color: '#ffffff', // White text color for contrast
                textAlign: 'center', // Center text alignment
            }}>
                <div style={{
                    display: 'flex',
                    
                    
                    overflow: 'hidden',
                }}>
                    <img src={image11} alt="Moving small" style={{
                        width: '600px', // Adjust the width as needed
                        height: '300px', // Adjust the height as needed
                        animation: 'move1 10s linear infinite',
                    }} />
                   <img src={image12} alt="Moving small" style={{
                        width: '600px', // Adjust the width as needed
                        height: '300px', // Adjust the height as needed
                        animation: 'move1 10s linear infinite',
                    }} />
                   
                   <img src={image13}alt="Moving small" style={{
                        width: '600px', // Adjust the width as needed
                        height: '300px', // Adjust the height as needed
                        animation: 'move1 10s linear infinite',
                    }} />
                   
                  
                        
                        <img src={image14} alt="Moving small" style={{
                          width: '600px', // Adjust the width as needed
                          height: '300px', // Adjust the height as needed
                          animation: 'move1 10s linear infinite',
                      }} />
                     
                      <img src={image15}alt="Moving small" style={{
                        width: '600px', // Adjust the width as needed
                        height: '300px', // Adjust the height as needed
                        animation: 'move1 10s linear infinite',
                    }} />
                   
                    <img src={image16}alt="Moving small" style={{
                      width: '600px', // Adjust the width as needed
                      height: '300px', // Adjust the height as needed
                      animation: 'move1 10s linear infinite',
                  }} />
                  
                  <img src={image17} alt="Moving small" style={{
                    width: '600px', // Adjust the width as needed
                    height: '300px', // Adjust the height as needed
                    animation: 'move1 5s linear infinite',
                }} />
               
                <img src={image18} alt="Moving small" style={{
                  width: '600px', // Adjust the width as needed
                  height: '300px', // Adjust the height as needed
                  animation: 'move1 5s linear infinite',
              }} />
              
              <img src={image19} alt="Moving small" style={{
                width: '600px', // Adjust the width as needed
                height: '300px', // Adjust the height as needed
                animation: 'move1 5s linear infinite',
            }} />
           
            
                   
                   <img src={image20} alt="Moving small" style={{
                        width: '600px', // Adjust the width as needed
                        height: '300px', // Adjust the height as needed
                        animation: 'move1 5s linear infinite',
                    }} />
                   
                  
                   
                   

                </div>
            </div>
            <style>{`
                @keyframes move1 {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                @keyframes move2 {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                @keyframes move3 {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
            `}</style>
        </div>

    </div>
);
}

export default Home;