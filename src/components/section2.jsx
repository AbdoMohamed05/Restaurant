import React from 'react'
import Image from '../images/2.jpg'

function section2() {
    return (
        <>



            <div className=" slider py-5">

                <h1>Testimonials</h1>

                <div id="carouselExampleIndicators" className="carousel slide">


                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={require('../images/1.jpg')} alt={"..."} />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis quibusdam tempora quasi esse <br /> molestias fugit aliquid quam soluta, explicabo voluptatum obcaecati voluptatibus molestiae impedit sunt.</p>
                            <span>front end developer</span>
                        </div>
                        <div className="carousel-item">
                            <img src={Image} alt={"..."} />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis quibusdam tempora quasi esse <br /> molestias fugit aliquid quam soluta, explicabo voluptatum obcaecati voluptatibus molestiae impedit sunt.</p>
                            <span>web designer</span>
                        </div>
                        <div className="carousel-item">
                            <img src={require('../images/1.jpg')} alt={"..."} />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis quibusdam tempora quasi esse <br /> molestias fugit aliquid quam soluta, explicabo voluptatum obcaecati voluptatibus molestiae impedit sunt.</p>
                            <span>front end developer</span>
                        </div>
                    </div>

                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                    </div>

                </div>
                
            </div>

        </>

    )
}

export default section2