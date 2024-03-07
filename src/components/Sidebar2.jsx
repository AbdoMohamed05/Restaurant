import React from 'react'
// import { AiOutlineCheck } from 'react-icons/ai'
function Sidebar2() {
    return (
        <>
            <section className='sidebar'>
                <div className="container">
                    <div className="row meat">

                        <div className='col-md-6 col-sm-12'>
                            <h2>We make everything by hand with the best possible ingredients.</h2>
                            <p className='prag'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away,
                                behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <ul>
                                <li>Etiam sed dolor ac diam volutpat.</li>
                                <li>Erat volutpat aliquet imperdiet.</li>
                                <li>purus a odio finibus bibendum.</li>
                            </ul>
                            
                            
                            {/* <div className="elemant">
                                <AiOutlineCheck className='icon' />
                                <h6>Etiam sed dolor ac diam volutpat.</h6>
                            </div>
                            <div className="elemant"><AiOutlineCheck className='icon' />
                                <h6>Erat volutpat aliquet imperdiet.</h6>
                            </div>
                            <div className="elemant">
                                <AiOutlineCheck  className='icon'/>
                                <h6>purus a odio finibus bibendum.</h6>
                            </div> */}
                            <button>Learn more</button>
                        </div>
                        <div className='col-md-6 col-sm-12'>
                            <img src={require('../images/2.png')} title='meat' alt="" />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Sidebar2