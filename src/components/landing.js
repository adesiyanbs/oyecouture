import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/landing.css';

function Landing() {
    return (
        <div>
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
            <section id="display">
                <div className="dis-container">
                    <Link to="/senators">
                        <div className="dis_div">
                            <h3 className="div-text">senator</h3>

                        </div>
                    </Link>
                    <Link to='/agbada'>
                        <div className="dis_div2">
                            <h3 className="div-text">agbada</h3>

                        </div>
                    </Link>
                    <Link to="/Suits">
                        <div className="dis_div3">
                            <h3 className="div-text">suits</h3>

                        </div>
                    </Link>
                    {/* <a href="">
                        <div className="dis_div4">
                            <h3 className="div-text">shirts and pants</h3>

                        </div>
                    </a> */}
                </div>
            </section>
            <section id="show">
                <div className="show_container">
                    <div className="show_left">
                        <h2>OYECOUTURE</h2>
                        <div></div>
                    </div>
                    <div className="show_right">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </section>
            <footer>Copyright oyecouture 2020 </footer>
            
        </div>
    )

}

export default Landing