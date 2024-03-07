import React from 'react'
import { Nav } from 'react-bootstrap';
import { BiLogoFacebook } from 'react-icons/bi';
import { BsInstagram } from 'react-icons/bs';
import { AiFillCopyrightCircle, AiFillYoutube, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';


function Footer() {
  return (
    <>
      <section className='footer'>

        <div className='nav'>
          <Nav className="">
            <Nav.Link to={`/`}>Register</Nav.Link>
            <Nav.Link href="#home">Forum</Nav.Link>
            <Nav.Link href="#home">Affiliate</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>
          </Nav>
        </div>

        <div className='list'>
          <ul>
            <li><a href="!#"><BiLogoFacebook /></a></li>
            <li><a href="!#"><AiOutlineTwitter /></a></li>
            <li><a href="!#"><AiFillYoutube /></a></li>
            <li><a href="!#"><AiFillLinkedin /></a></li>
            <li><a href="!#"><BsInstagram /></a></li>
          </ul>
        </div>

        <div className='list'>
          <p><a href="!#"><AiFillCopyrightCircle /></a> 2021. Foodera. All rights reserved.</p>
        </div>


      </section>

    </>
  )
}

export default Footer