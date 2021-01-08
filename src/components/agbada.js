import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/landing.css';
import '../styles/agbada.css'



function Agbadas() {
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
            <h3>AGBADAS</h3>
            <section id="others">
                <div className="others_container">
                    <Link to="/suits"><button>suits</button></Link>
                    <Link to="/senators"><button>senator</button></Link>
                </div>
            </section>
            <section id="agb">
                <div className="agb_container">
                    <div></div>
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

export default Agbadas