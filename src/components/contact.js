import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/contact.css';
import '../styles/landing.css';
import location from '../images/icon-location.svg'
import email from '../images/icon-email.svg'
import number from '../images/icon-phone.svg'


function Contact() {
    return (
        <div>
            <div className="logoplace"></div>

            <h2 className="bodyh2">oyecouture</h2>
            <p>BESPOKE</p>
            <section id="top">
                <header>
                    <ul>
                    <li><Link to="/">home</Link></li>
                        <li><Link to="/about">about</Link></li>
                        <li><Link to="/contact">contact</Link></li>
                    </ul>
                </header>
            </section>
            <section id="contact">
                <div class="con_container">
                    <div className="othersi">
                        <img src={location}alt="loc"/>
                        <h1>Address</h1>
                        <p>
                            No.24, <br/>
                            Omowunnmi Street, <br/>  Alafin something, 
                            Mushin, <br/>
                            Lagos,
                            Nigeria
                        </p>
                    </div>
                    <div className="otherside">
                        {/* <h1></h1> */}
                        <p>
                           <img src={number} alt=""/> 0000000000 <br/>
                            f: @oyecouture <br/>
                            i: @oyecouture <br/>
                            t: @oyecouture <br/>
                            <img src={email} alt=""/>oyecouture@mail.com
                        </p>
                    </div>
                </div>
            </section>
    <section id="showcase">
        <div class="show-container">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </section>
    <div className="logoplace"></div>

    <footer>Copyright oyecouture 2020 </footer>
            
        </div>
    )

}

export default Contact