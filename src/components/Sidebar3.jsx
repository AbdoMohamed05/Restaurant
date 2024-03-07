import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar3() {
    return (
        <>
        <section className='sidebar3'>

            <div className='container'>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h1>When a man's stomach is full it makes no<br/>difference whether he is rich or poor.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio<br/>finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <Link to="#">Watch Our Story</Link>
                    </div>
                </div>
            </div>

        </section>
    
        </>
    )
}

export default Sidebar3