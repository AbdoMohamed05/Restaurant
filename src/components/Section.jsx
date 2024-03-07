import React from 'react'
import Date from './Date'

function Section() {
    const Dateitem = Date.map((item) => {
        return (
            <div className="col-lg-4 col-md-4 col-md-12">
                <div className="sox">
                    <img src={item.img} alt="" />
                    <h3>{item.title}</h3>
                    <span>{item.time}</span>
                    <h4>{item.price}</h4>
                    <hr />
                    <button>Order Naw</button>
                </div>
            </div>
        )
    })


    return (
        <section className='sec'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-md-12">
                        <h1>Explore Our Foods</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                    </div>
                </div>

                <div className="row">
                    {Dateitem}

                </div>
            </div>
        </section>



    )

}

export default Section            