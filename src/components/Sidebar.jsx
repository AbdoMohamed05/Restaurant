import React from 'react'

function Sidebar() {
  return (
    <>
    <section className='sidebar'>
        <div className="container">
            <div className="row meat">
                <div className='col-md-6 col-sm-12'>  
                    <img src={require('../images/1.png')} title='meat' alt="" />
                </div>
                <div className='col-md-6 col-sm-12'>
                    <h2>We pride ourselves on making real food from the best ingredients.</h2>
                    <p className='prag'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                    <button>Learn more</button>
                </div>
            </div>
        </div>
    </section>
    
    
    </>
  )
}

export default Sidebar