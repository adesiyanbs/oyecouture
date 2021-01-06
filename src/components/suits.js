import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/landing.css';
import '../styles/cat.css'


function Suits() {
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
            <h3>SUITS</h3>
            <section id="others">
                <div className="others_container">
                    <Link to="/senators"><button>senators</button></Link>
                    <Link to=""><button>agbadas</button></Link>
                </div>
            </section>
            <section id="catalogue">
                <div className="cat_container">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </section>
            <footer>Copyright oyecouture 2020 </footer>
            
        </div>
    )

}

export default Suits